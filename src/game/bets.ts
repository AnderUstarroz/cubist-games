import {Connection, PublicKey, Transaction} from '@solana/web3.js';
import {MEMO_PROGRAM_ID} from '../constants';
import {
  ActionType,
  BetMsgType,
  ClaimSolMsgType,
  PDATypes,
  PlayerBetsType,
  PlayerBetType,
  RefundSolMsgType,
} from '../game';
import {lamports_to_sol, num_format, SolanaProgramType} from '../solana';
import {BN} from '@project-serum/anchor';

export interface PlayerBetIdType extends PlayerBetType {
  betId: number;
}

export async function bet_tx(
  solanaProgram: SolanaProgramType,
  connection: Connection,
  lamports: number,
  optionId: number,
  playerBetsPDA: PublicKey,
  playerBets: PlayerBetsType | null,
  playerPublicKey: PublicKey,
  gamePDA: PublicKey,
  systemConfigPDA: PublicKey,
  systemTreasury: PublicKey,
  gameId: number,
): Promise<[Transaction, BetMsgType]> {
  const msg = {
    siteId: (process.env.NEXT_PUBLIC_AUTHORITY as string).slice(0, 7),
    gameId: gameId,
    betId: playerBets ? playerBets.bets.length : 0,
    type: ActionType.Bet,
    optionId: optionId,
    stake: num_format(lamports_to_sol(lamports), 9),
    referral: null,
  };

  const transaction = new Transaction(await connection.getLatestBlockhash());
  transaction.feePayer = playerPublicKey;
  // Initialize player's betting account if doesn't exist already
  if (!playerBets) {
    transaction.add(
      await solanaProgram.methods
        .initializePlayerBets()
        .accounts({
          player: playerPublicKey,
          game: gamePDA,
          playerBets: playerBetsPDA,
        })
        .instruction(),
    );
  }

  transaction.add(
    await solanaProgram.methods
      .placeSolBet(optionId, new BN(lamports))
      .accounts({
        player: playerPublicKey,
        game: gamePDA,
        playerBets: playerBetsPDA,
        systemTreasury: systemTreasury,
        systemConfig: systemConfigPDA,
      })
      .instruction(),
  );
  transaction.add({
    programId: MEMO_PROGRAM_ID,
    keys: [],
    data: Buffer.from(JSON.stringify(msg), 'utf8'),
  });
  return [transaction, msg] as [Transaction, BetMsgType];
}

export function final_fee(
  totalStake: number, //lamports
  loserStake: number, //lamports
  fee: number, // 0% - 100%
): number {
  let fee_amount = (fee / 100) * totalStake;
  if (fee_amount > loserStake) {
    fee_amount = loserStake / 2.0;
  }
  return Math.floor(fee_amount);
}
export function calculate_payment(
  stake: number, //lamports
  totalStake: number, //lamports
  winnerStake: number, //lamports
  fee: number, // 0% - 100%
) {
  let loserStake = totalStake - winnerStake;
  return Math.floor(
    ((totalStake - final_fee(totalStake, loserStake, fee)) / winnerStake) *
      stake,
  );
}

export async function claim_sol_bets_tx(
  solanaProgram: SolanaProgramType,
  gameId: number,
  result: number,
  fee: number, // 0% - 100%
  pdas: PDATypes,
  wallet: PublicKey,
  totalStake: number, //lamports
  winnerStake: number, //lamports
  playerBets: PlayerBetsType,
): Promise<[Transaction, ClaimSolMsgType]> {
  // Select only winner bets (if not paid already)
  const winnerBets = playerBets.bets
    .map((b: PlayerBetType, betId: number) => {
      return {...b, betId: betId};
    })
    .filter((b: PlayerBetType) => b.optionId === result && !b.paid);
  const msg: ClaimSolMsgType = {
    siteId: (process.env.NEXT_PUBLIC_AUTHORITY as string).slice(0, 7),
    gameId: gameId,
    type: ActionType.Payment,
    bets: winnerBets.map((bet: PlayerBetIdType) => [
      bet.betId, // BetId
      bet.optionId, // OptionId
      num_format(lamports_to_sol(bet.stake.toNumber())), // Stake
      num_format(
        // Payment
        lamports_to_sol(
          calculate_payment(bet.stake.toNumber(), totalStake, winnerStake, fee),
        ),
      ),
    ]),
  };
  // Create transaction:
  const transaction = new Transaction();
  await Promise.all(
    winnerBets.map(async (bet: any) => {
      transaction.add(
        await solanaProgram.methods
          .claimSolBet(bet.betId, bet.optionId, bet.stake)
          .accounts({
            player: wallet,
            game: pdas.game.pda,
            playerBets: pdas.playerBets.pda,
          })
          .instruction(),
      );
    }),
  );
  transaction.add({
    programId: MEMO_PROGRAM_ID,
    keys: [],
    data: Buffer.from(JSON.stringify(msg), 'utf8'),
  });
  return [transaction, msg];
}

export async function refund_sol_bets_tx(
  solanaProgram: SolanaProgramType,
  gameId: number,
  pdas: PDATypes,
  wallet: PublicKey,
  playerBets: PlayerBetsType,
): Promise<[Transaction, RefundSolMsgType]> {
  const msg: RefundSolMsgType = {
    siteId: (process.env.NEXT_PUBLIC_AUTHORITY as string).slice(0, 7),
    gameId: gameId,
    type: ActionType.Refund,
    bets: playerBets.bets.map((bet: PlayerBetType, betId: number) => [
      betId, // BetId
      bet.optionId, // OptionID
      num_format(lamports_to_sol(bet.stake.toNumber())), // Stake
    ]),
  };

  const transaction = new Transaction();
  await Promise.all(
    playerBets.bets.map(async (bet: PlayerBetType, betId: number) => {
      transaction.add(
        await solanaProgram.methods
          .refundSolBet(betId, bet.optionId, bet.stake)
          .accounts({
            player: wallet,
            game: pdas.game.pda,
            playerBets: pdas.playerBets.pda,
          })
          .instruction(),
      );
    }),
  );
  transaction.add({
    programId: MEMO_PROGRAM_ID,
    keys: [],
    data: Buffer.from(JSON.stringify(msg), 'utf8'),
  });
  return [transaction, msg];
}

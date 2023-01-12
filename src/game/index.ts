import {PublicKey} from '@solana/web3.js';
import {BN} from '@project-serum/anchor';
import * as anchor from '@project-serum/anchor';
import {PROGRAM_ID} from '../constants';
import {IdlAccounts, IdlTypes} from '@project-serum/anchor';
import {CubistGames} from '../cubist_games';

export type PlayerBetsAccountType = IdlAccounts<CubistGames>['playerBets'];

export type PlayerBetType = IdlTypes<CubistGames>['Bet'];
export interface PlayerBetsType extends PlayerBetsAccountType {
  bets: PlayerBetType[];
}

export interface SystemConfigType {
  bump: number;
  treasury: PublicKey;
  gameFee: BN;
  betFee: BN;
  profitFee: number;
}

export interface StatsType {
  authority: PublicKey;
  bump: number;
  totalGames: BN;
  totalSolProfits: BN;
}
export interface GeneralGameType {
  fee: number;
  showPot: boolean;
  useCategories: boolean;
  allowReferral: boolean;
  fireThreshold: BN;
}

export interface StakeButtonsType {
  minStake: BN;
  minStep: BN;
  customStakeButton: true;
  stakeButtons: BN[];
}

export interface ProfitShareType {
  treasury: PublicKey;
  share: number;
  cashed: boolean;
}

export interface TermsType {
  id: string;
  bump: number;
}
export interface DefaultGameSettingsType
  extends GeneralGameType,
    StakeButtonsType {
  designTemplatesHash: null | string;
  categoriesHash: null | string;
  profitSharing: ProfitShareType[];
  terms: TermsType[];
}

export interface OptionType {
  id: number;
  totalStake: BN;
  totalBets: number;
}

export enum ActionType {
  Bet = 'Bet',
  Payment = 'Payment',
  Refund = 'Refund',
  Collect = 'Collect',
}

export interface BetMsgType {
  siteId: string;
  gameId: number;
  betId: number;
  type: string;
  optionId: number;
  stake: number;
  referral: string | null;
}
export type ClaimSolBetType = [number, number, number, number];
export interface ClaimSolMsgType {
  siteId: string;
  gameId: number;
  type: string;
  bets: ClaimSolBetType[];
}

export type RefundSolBetType = [number, number, number];

export type RefundSolMsgType = {
  siteId: string;
  gameId: number;
  type: string;
  bets: RefundSolBetType[];
};

export interface PDAType {
  pda: PublicKey;
  bump: number;
}

export interface PDATypes {
  systemConfig: PDAType;
  config: PDAType;
  stats: PDAType;
  game: PDAType;
  playerBets: PDAType;
}

export const isRejected = (
  input: PromiseSettledResult<unknown>,
): input is PromiseRejectedResult => input.status === 'rejected';

export const isFulfilled = <T>(
  input: PromiseSettledResult<T>,
): input is PromiseFulfilledResult<T> => input.status === 'fulfilled';

export async function system_config_pda(systemAuthority: PublicKey) {
  return await PublicKey.findProgramAddress(
    [
      anchor.utils.bytes.utf8.encode('system_config'),
      systemAuthority.toBuffer(),
    ],
    PROGRAM_ID,
  );
}

export async function config_pda(authority: PublicKey) {
  return await PublicKey.findProgramAddress(
    [anchor.utils.bytes.utf8.encode('config'), authority.toBuffer()],
    PROGRAM_ID,
  );
}

export async function stats_pda(authority: PublicKey) {
  return await PublicKey.findProgramAddress(
    [anchor.utils.bytes.utf8.encode('stats'), authority.toBuffer()],
    PROGRAM_ID,
  );
}

export async function game_pda(authority: PublicKey, id: BN) {
  return await PublicKey.findProgramAddress(
    [id.toArrayLike(Buffer, 'le', 8), authority.toBuffer()],
    PROGRAM_ID,
  );
}

export async function player_bets_pda(
  playerPublicKey: PublicKey,
  gamePublicKey: PublicKey,
) {
  return await PublicKey.findProgramAddress(
    [playerPublicKey.toBuffer(), gamePublicKey.toBuffer()],
    PROGRAM_ID,
  );
}

export async function terms_pda(authority: PublicKey, id: string) {
  return await PublicKey.findProgramAddress(
    [anchor.utils.bytes.utf8.encode(`terms-${id}`), authority.toBuffer()],
    PROGRAM_ID,
  );
}

export const fetch_pdas = async (pdaParams: any): Promise<PDATypes> => {
  const data = await Promise.allSettled(
    pdaParams.map(async (params: any[]) => {
      const [_, func, ...args] = params;
      return func(...args);
    }),
  );
  if (data.find(isRejected)) {
    console.error(data);
    throw new Error('Failed to fetch PDAs');
  }
  return data.reduce((acc: PDATypes, r: any, k: number) => {
    //@ts-ignore
    acc[pdaParams[k][0]] = {
      pda: r.value[0],
      bump: r.value[1],
    };
    return acc;
  }, {} as PDATypes);
};

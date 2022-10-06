import * as anchor from '@project-serum/anchor';
import {Connection} from '@solana/web3.js';
import {PROGRAM_ID} from '../constants';
import {CubistGames} from '../cubist_games';

export interface SolanaProgramType {
  program: anchor.Program<CubistGames>;
  provider: anchor.AnchorProvider;
}
// Returns false if the string doesn't contian the I, O, l, 0 characters.
export const isBase58 = (value: string): boolean =>
  /^[A-HJ-NP-Za-km-z1-9]*$/.test(value);

export const initSolanaProgram = async (
  idl: any,
  connection: Connection,
  walletAdapter: any,
): Promise<SolanaProgramType> => {
  const provider = new anchor.AnchorProvider(
    connection,
    walletAdapter,
    anchor.AnchorProvider.defaultOptions(),
  );
  anchor.setProvider(provider);
  return {
    program: new anchor.Program<CubistGames>(idl, PROGRAM_ID, provider),
    provider: provider,
  };
};

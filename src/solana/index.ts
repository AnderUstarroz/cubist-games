import * as anchor from '@project-serum/anchor';
import {Connection} from '@solana/web3.js';
import {PROGRAM_ID} from '../constants';
import {CubistGames} from '../cubist_games';

export type SolanaProgramType = anchor.Program<CubistGames>;
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
  return new anchor.Program<CubistGames>(idl, PROGRAM_ID, provider);
};

export async function solana_usd_price(currency: string = 'USD') {
  // Try to fetch Solana price from CoinGecko.
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=${currency}`,
    );
    return (await response.json())?.solana.usd;
    // Fallback to fetch Solana price from Coinbase.
  } catch (error) {
    const response = await fetch(
      `https://api.exchange.coinbase.com/products/SOL-${currency}/ticker`,
    );
    return parseFloat((await response.json())?.price);
  }
}

export function solana_to_usd(amount: number, rate: number) {
  return amount * rate;
}
export function usd_to_solana(amount: number, rate: number) {
  return amount / rate;
}

export function sol_to_lamports(amount: number) {
  return amount * 1000000000;
}

export function lamports_to_sol(amount: number) {
  return amount / 1000000000;
}

export async function arweave_json(hash: string) {
  let response = await fetch(`https://arweave.net/${hash}`);
  return await response.json();
}

import {PublicKey} from '@solana/web3.js';

export const PROGRAM_ID = new PublicKey(
  'Gamehha5KKbeZCPDu7MrpZz8JEZXtNycMy8WLjLtG5Dd',
);
export const MEMO_PROGRAM_ID = new PublicKey(
  'MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr',
);

export const SYSTEM_AUTHORITY = new PublicKey(
  'GAMEGRX4kWv15uJ7ySjovQxtongVQVeB3g3DTWh7fCVE',
);

export enum ENVIRONMENT {
  development,
  testing,
  production,
}

/**
 * There are 1-billion lamports in one SOL
 */
export const LAMPORTS_PER_SOL = 1000000000;

export const CURRENCY = 'solana';

export const MAX_TERMS = 50;

import {PublicKey} from '@solana/web3.js';

export const PROGRAM_ID = new PublicKey(
  'gameQsynjfrPda7aWQjyYi4wDm6btb84fu1PwuqewiF',
);
export const MEMO_PROGRAM_ID = new PublicKey(
  'MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr',
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

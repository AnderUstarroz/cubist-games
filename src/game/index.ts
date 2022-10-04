import {PublicKey} from '@solana/web3.js';
import {BN} from '@project-serum/anchor';

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
}
export interface DefaultGameSettingsType
  extends GeneralGameType,
    StakeButtonsType {
  designTemplatesHash: null | string;
  categoriesHash: null | string;
  profitSharing: ProfitShareType[];
}

import BigNumber from 'bignumber.js';
import {WebBundlr} from '@bundlr-network/client';
import {Connection} from '@solana/web3.js';
import type {Adapter} from '@solana/wallet-adapter-base';
import {ENVIRONMENT, CURRENCY} from '../constants';

// @ts-ignore
import fileReaderStream from 'filereader-stream';

export class BundlrError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BundlrError';
  }
}

export interface FileType {
  mimeType: string;
  size: number;
  stream: any;
  arweave_hash: string | null;
}
export interface FilesType {
  [key: string]: FileType;
}

export class Bundlr {
  // @ts-ignore
  webBundlr: WebBundlr;

  constructor(env: ENVIRONMENT, connection: Connection, adapter: Adapter) {
    return (async (): Promise<Bundlr> => {
      const network = await this.getBundlerNetwork(env);
      this.webBundlr = new WebBundlr(network, CURRENCY, adapter, {
        providerUrl: connection.rpcEndpoint,
      });
      try {
        await this.webBundlr.utils.getBundlerAddress(CURRENCY);
      } catch {
        throw new BundlrError(`Failed to connect to bundlr ${network}`);
      }
      try {
        await this.webBundlr.ready();
      } catch (err) {
        throw err;
      }
      if (!this.webBundlr.address) {
        throw new BundlrError('Bundlr connection failed');
      }
      return this;
    })() as unknown as Bundlr;
  }

  async getBundlerNetwork(env: ENVIRONMENT) {
    if (env === ENVIRONMENT.production) {
      return 'https://node1.bundlr.network';
    }
    return 'https://devnet.bundlr.network';
  }

  async getFileData(e: any): Promise<FilesType> {
    if (e.target.files?.length !== 1) {
      throw new Error(
        `Invalid number of files (expected 1, got ${e.target.files?.length})`,
      );
    }
    return {
      [e.target.name]: {
        mimeType: e.target.files[0]?.type ?? 'application/octet-stream',
        size: e.target.files[0]?.size ?? 0,
        stream: fileReaderStream(e.target.files[0]),
        arweave_hash: null,
      },
    };
  }

  async fund(fundSolAmount: number) {
    const lamports = this.parseSolToLamports(fundSolAmount);
    try {
      const response = await this.webBundlr.fund(lamports);
      console.log(`Funded ${response.target}, tx ID : ${response.id}`);
      return response;
    } catch (e: any) {
      throw new BundlrError(`Failed to fund - ${e.data?.message || e.message}`);
    }
  }

  async getPrice(size: number) {
    return await this.webBundlr.utils.getPrice(CURRENCY, size);
  }

  async balance() {
    return await this.webBundlr.getBalance(this.webBundlr.address);
  }

  async uploadFile(file: FileType, uploadProgress = (_e: any) => {}) {
    if (file.stream) {
      throw new BundlrError('File stream is empty, aborting upload...');
    }
    const uploader = this.webBundlr.uploader.chunkedUploader;
    uploader.setBatchSize(2);
    uploader.setChunkSize(2_000_000);
    uploader.on('chunkUpload', uploadProgress);
    try {
      const response = await uploader.uploadData(file.stream, {
        tags: [
          {
            name: 'Content-Type',
            value: file.mimeType ?? 'application/octet-stream',
          },
        ],
      });

      if (response.status !== 200) {
        console.error(response);
        throw new BundlrError(`Upload failed! ${response.status}`);
      }
      return response.data.id;
    } catch (e) {
      throw new BundlrError(`Failed to upload - ${e}`);
    }
  }

  lamportsToSol(amount: number) {
    return this.webBundlr.utils.unitConverter(amount);
  }

  parseSolToLamports(input: string | number) {
    /* Converts the parsed Sol amount into lamports */
    const lamports = new BigNumber(input).multipliedBy(
      this.webBundlr.currencyConfig.base[1],
    );
    if (lamports.isLessThan(1)) {
      throw new BundlrError(
        `The input amount ${input} ${this.ticker} is too small!`,
      );
    }
    return lamports;
  }

  get ticker() {
    return this.webBundlr.currencyConfig.ticker;
  }

  get address() {
    return this.webBundlr.address;
  }
}

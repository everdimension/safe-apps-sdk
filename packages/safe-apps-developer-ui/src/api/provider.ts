import Web3Modal, { IProviderOptions } from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';

const WALLET_PROVIDER = {
  SAFE: 'SAFE',
  METAMASK: 'METAMASK',
  REMOTE: 'REMOTE',
  TORUS: 'TORUS',
  PORTIS: 'PORTIS',
  FORTMATIC: 'FORTMATIC',
  SQUARELINK: 'SQUARELINK',
  WALLETCONNECT: 'WALLETCONNECT',
  OPERA: 'OPERA',
  WALLETLINK: 'WALLETLINK',
  AUTHEREUM: 'AUTHEREUM',
  LEDGER: 'LEDGER',
  TREZOR: 'TREZOR',
  LATTICE: 'LATTICE',
  UNKNOWN: 'UNKNOWN',
};

enum ETHEREUM_NETWORK_TO_ID {
  MAINNET = 1,
  MORDEN = 2,
  ROPSTEN = 3,
  RINKEBY = 4,
  GOERLI = 5,
  KOVAN = 42,
  XDAI = 100,
  ENERGY_WEB_CHAIN = 246,
  VOLTA = 73799,
  UNKNOWN = 0,
  LOCAL = 4447,
}

const providerOptions: IProviderOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: '82b8340f4bd146a2bfc606609ffbec41',
    },
  },
};

const web3Modal = new Web3Modal({ network: 'rinkeby', providerOptions, cacheProvider: true });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const connectToProvider = async (): Promise<any> => {
  const provider = await web3Modal.connect();
  return provider;
};

export { WALLET_PROVIDER, ETHEREUM_NETWORK_TO_ID, connectToProvider };

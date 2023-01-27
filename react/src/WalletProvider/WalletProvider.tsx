import React from "react";

declare global {
  interface Window {
    arweaveWallet: any;
  }
}

interface WalletContextState {
  wallets: { name: string; logo: string }[];
  walletAddress: string | null;
  availableBalance: number | null;
  handleConnect: () => void;
  handleDisconnect: () => void;
  walletModalVisible: boolean;
  setWalletModalVisible: (open: boolean) => void;
}

interface WalletProviderProps {
  children: React.ReactNode;
}

function getBalanceEndpoint(wallet: string) {
  return `https://arweave.net/wallet/${wallet}/balance`;
}

const AR_WALLETS = [{ name: "arconnect", logo: `arconnect-wallet-logo.png` }];

const WALLET_PERMISSIONS = [
  "ACCESS_ADDRESS",
  "ACCESS_PUBLIC_KEY",
  "SIGN_TRANSACTION",
  "DISPATCH",
];

const DEFAULT_CONTEXT = {
  wallets: [],
  walletAddress: null,
  availableBalance: null,
  handleConnect() {
    console.error(`No Connector Found`);
  },
  handleDisconnect() {
    console.error(`No Connection Found`);
  },
  walletModalVisible: false,
  setWalletModalVisible(_open: boolean) {
    console.error(
      `Make sure to render ArweaveProvider as an ancestor of the component that uses ARContext.Provider`
    );
  },
};

const WalletContext = React.createContext<WalletContextState>(DEFAULT_CONTEXT);

export function useWalletProvider(): WalletContextState {
  return React.useContext(WalletContext);
}

export default function WalletProvider(props: WalletProviderProps) {
  const [walletModalVisible, setWalletModalVisible] =
    React.useState<boolean>(false);
  const [walletAddress, setWalletAddress] = React.useState<string | null>(null);
  const [availableBalance, setAvailableBalance] = React.useState<number | null>(
    null
  );

  async function handleConnect() {
    await global.window?.arweaveWallet
      ?.connect(WALLET_PERMISSIONS as any)
      .then(() => {
        setWalletModalVisible(false);
      })
      .catch((e: any) => {
        alert(e);
      });
  }

  async function handleDisconnect() {
    await global.window?.arweaveWallet?.disconnect();
    setWalletAddress(null);
  }

  const getUserBalance = async (wallet: string) => {
    const rawBalance = await fetch(getBalanceEndpoint(wallet));
    const jsonBalance = await rawBalance.json();
    return jsonBalance / 1e12;
  };

  React.useEffect(() => {
    async function handleWallet() {
      let walletAddress: string | null = null;
      try {
        walletAddress = await global.window.arweaveWallet.getActiveAddress();
      } catch {}
      if (walletAddress) {
        setWalletAddress(walletAddress as any);
        setAvailableBalance(await getUserBalance(walletAddress));
      }
    }

    handleWallet();

    window.addEventListener("arweaveWalletLoaded", handleWallet);

    return () => {
      window.removeEventListener("arweaveWalletLoaded", handleWallet);
    };
  });

  return (
    <WalletContext.Provider
      value={{
        wallets: AR_WALLETS,
        walletAddress,
        availableBalance,
        handleConnect,
        handleDisconnect,
        walletModalVisible,
        setWalletModalVisible,
      }}
    >
      {props.children}
    </WalletContext.Provider>
  );
}

// App.js
import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';
import './App.css'; // Import the new CSS file
import { SendTokens } from './SendTokens';
import { SignMessage } from './SignMessage';

function App() {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="container">
            <header className="header">
              <h1>Solana Wallet App</h1>
            </header>
            <div className="wallet-buttons-container">
              <WalletMultiButton className="wallet-multi-button" />
              <WalletDisconnectButton className="wallet-disconnect-button" />
            </div>
            <main>
              <SignMessage />
              <SendTokens />
            </main>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
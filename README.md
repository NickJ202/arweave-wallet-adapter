TypeScript wallet adapter and components for Arweave Permaweb applications.

This project includes a full working example of a react application wrapped in an arweave wallet provider. In order to implement this provider into your own application, clone this repository and move the WalletProvider module into your application, then wrap your <App /> component with the WalletProvider.

ArConnect is currently the only supported wallet.

`index.tsx` Example

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { WalletProvider } from "./WalletProvider";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WalletProvider>
      <App />
    </WalletProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

Access this provider from any component in your application with the `useWalletProvider` hook. See the `src/WalletConnect` module for use of `useWalletProvider`.

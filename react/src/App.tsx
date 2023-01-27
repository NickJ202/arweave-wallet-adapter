import React from "react";

import { WalletConnect } from "./WalletConnect";

import * as S from "./styles";

function checkDesktop(): boolean {
  return window.innerWidth > parseInt("1024px");
}

function App() {
  const [open, setOpen] = React.useState(checkDesktop());
  
  return (
    <>
      <div id={`modal-container`} />
      <S.Wrapper>
        <S.WalletConnect>
          <WalletConnect callback={() => setOpen(!open)} />
        </S.WalletConnect>
      </S.Wrapper>
    </>
  );
}

export default App;

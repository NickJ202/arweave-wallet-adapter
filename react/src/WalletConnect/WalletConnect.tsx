import React from "react";
import { ReactSVG } from "react-svg";

import { useWalletProvider } from "../WalletProvider/WalletProvider";

import { Button } from "../Button";
import { Modal } from "../Modal";

import { CloseHandler } from "../CloseHandler";

import * as S from "./styles";

function formatAddress(address: string | null, wrap: boolean) {
    if (!address) {
        return "";
    }
    const formattedAddress = address.substring(0, 5) + "..." + address.substring(36, address.length - 1);
    return wrap ? `(${formattedAddress})` : formattedAddress;
}

function WalletList() {
    const walletProvider = useWalletProvider();

    return (
        <S.WalletListContainer>
            {walletProvider.wallets.map((wallet, index) => (
                <S.WalletListItem key={index} onClick={() => walletProvider.handleConnect()}>
                    <img src={`${wallet.logo}`} alt={""} />
                    <span>{wallet.name.charAt(0).toUpperCase() + wallet.name.slice(1)}</span>
                </S.WalletListItem>
            ))}
        </S.WalletListContainer>
    )
}

export default function WalletConnect(props: { callback: () => void }) {
    const walletProvider = useWalletProvider();

    const [showDropdown, setShowDropdown] = React.useState<boolean>(true);
    const [copied, setCopied] = React.useState<boolean>(false);

    function handlePress() {
        if (walletProvider.walletAddress) {
            setShowDropdown(true)
        }
        else {
            walletProvider.setWalletModalVisible(true);
        }
    }

    const copyAddress = React.useCallback(async () => {
        if (walletProvider.walletAddress) {
            if (walletProvider.walletAddress.length > 0) {
                await navigator.clipboard.writeText(walletProvider.walletAddress);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }
        }
    }, [walletProvider.walletAddress]);

    function handleDisconnect() {
        walletProvider.handleDisconnect();
        setShowDropdown(false);
    }

    return (
        <CloseHandler handler={() => setShowDropdown(!showDropdown)} active={showDropdown}>
            <S.Wrapper>
                {walletProvider.walletModalVisible &&
                    <Modal
                        title={`Connect Wallet`}
                        handleClose={() => walletProvider.setWalletModalVisible(false)}
                    >
                        <WalletList />
                    </Modal>
                }
                <Button
                    type={"primary"}
                    label={walletProvider.walletAddress ?
                        formatAddress(walletProvider.walletAddress, false) : `Connect Wallet`}
                    handlePress={handlePress}
                    useMaxWidth
                />
                {showDropdown &&
                    <S.WalletDropdown>
                        <li onClick={copyAddress}>
                            <S.Icon strokeFill={false}>
                                <ReactSVG src={`copy.svg`} />
                            </S.Icon>
                            {copied ?
                                <div>
                                    <span>
                                        {`Copied!`}
                                    </span>
                                </div>
                                : `Copy Address`}
                        </li>
                        <li onClick={handleDisconnect}>
                            <S.Icon strokeFill={false}>
                                <ReactSVG src={`disconnect.svg`} />
                            </S.Icon>
                            {`Disconnect`}
                        </li>
                    </S.WalletDropdown>
                }
            </S.Wrapper>
        </CloseHandler>
    )
}
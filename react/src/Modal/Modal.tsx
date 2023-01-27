import React from "react";

import { IconButton } from "../IconButton";
import { Portal } from "../Portal";

import * as S from "./styles";
import { IProps } from "./types";

function hideDocumentBody(): void {
    document.body.style.overflow = "hidden";
  }
  
function showDocumentBody(): void {
    document.body.style.overflow = "auto";
  }

export default function Modal(props: IProps) {

    React.useEffect(() => {
        window.scrollTo(0, 0);
        hideDocumentBody();
        return () => {
            showDocumentBody();
        };
    }, []);

    return (
        <Portal node={`modal-container`}>
            <S.Wrapper>
                <S.Container>
                    <S.Header>
                        <S.Close>
                            <IconButton
                                type={"primary"}
                                sm
                                warning
                                src={`close.svg`}
                                handlePress={props.handleClose}
                            />
                        </S.Close>
                    </S.Header>
                    <S.Body>
                        {props.children}
                    </S.Body>
                </S.Container>
            </S.Wrapper>
        </Portal>
    )
}
import styled, { keyframes } from "styled-components";

export const open = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const fadeIn1 = "250ms cubic-bezier(0, 0, 0.2, 1) 0ms";

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 11;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    animation: ${open} ${fadeIn1};
`;

export const Container = styled.div`
    height: 600px;
    max-height: 75vh;
    width: 555px;
    max-width: 87.5vw;
    background: #FFFFFF;
    border-radius: 5px;
    position: absolute;
    top: 47.5%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media(max-width: 540px) {
        top: 50%;
    }
`;

export const Header = styled.div`
    height: 65px;
    background: #F4F5F6;
    border-bottom: 1px solid #EAEAEA;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`;

export const Title = styled.h2`
    color: #000000;
    font-family: monospace;
`

export const Close = styled.div`
    padding: 2.5px 0 0 0;
`;

export const Body = styled.div`
    height: calc(100% - 65px);
    width: 100%;
    overflow-y: auto;
`;

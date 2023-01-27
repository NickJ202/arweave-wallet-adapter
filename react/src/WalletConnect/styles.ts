import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
`;

export const WalletListContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const WalletListItem = styled.button`
    padding: 0;
    margin: 0;
    border: none;
    background: transparent;
    height: 55px;
    width: 100%;
    text-align: left;
    padding: 0 20px;
    border-bottom: 1px solid #EAEAEA;
    display: flex;
    align-items: center;
    &:hover {
        background: #F4F5F6;
        cursor: pointer;
    }
    img {
        width: 30px;
        margin: 0 15px 0 0;
    }
    span {
        font-size: 16px;
        margin-top: 2.5px;
    }
`;

export const WalletDropdown = styled.ul`
    width: 225px;
    padding: 10px 0;
    position: absolute;
    top: 33.5px;
    right: 0;
    border: 1px solid #EAEAEA;
    background: #FFFFFF;
    border-radius: 5px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    li {
        text-align: center;
        height: 35px;
        display: flex;
        align-items: center;
        cursor: pointer;
        font-size: 14px;
        &:hover {
            background: #F4F5F6;
        }
    }
    span {
        font-size: 14px;
    }
`;

export const Icon = styled.div<{ strokeFill: boolean }>`
    svg {
        width: 17.5px;
        margin: 5.5px 17.5px 0 17.5px;
        fill: ${(props) => props.strokeFill ? "none" : "#3A3A3A"};
        stroke: ${(props) => props.strokeFill ? "#3A3A3A" : "none"};
    }
`
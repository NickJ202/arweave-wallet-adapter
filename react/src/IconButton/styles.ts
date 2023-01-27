import styled from "styled-components";

export const Primary = styled.button<{
  sm: boolean | undefined,
  warning: boolean | undefined,
  disabled: boolean | undefined
}>`
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  height: auto;
  width: ${(props) => props.sm ? "15px" : "17.5px"};
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;

  &:focus {
    outline: none;
    svg {
      opacity: ${(props) => props.disabled ? "1" : "0.75"};
    }
  }
  
  svg {
    height: 100%;
    width: 100%;
    fill: ${(props) => props.warning ?
    (props.disabled ?
      "#3A3A3A" : "#EE3C3C") : "#3A3A3A"};
    
    &:hover {
      cursor: ${(props) => props.disabled ? "not-allowed" : "pointer"};
      opacity: ${(props) => props.disabled ? "1" : "0.75"};
    }
  }
`;
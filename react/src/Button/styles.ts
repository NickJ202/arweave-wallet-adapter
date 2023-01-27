import styled from "styled-components";

export const Primary = styled.button<{ 
  useMaxWidth: boolean | undefined, 
  noMinWidth: boolean | undefined,
  active: boolean | undefined 
}>`
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;
  position: relative;
  background: ${(props) => props.active ? 
    "#FFFFFF" : "#FFFFFF"};
  border: 1.5px solid #3A3A3A;
  height: 33.5px;
  min-width: ${(props) => props.noMinWidth ? 
    "none" : "150px"};
  max-width: ${(props) => props.useMaxWidth ? 
    "150px" : "none"};
  overflow-x: hidden;
  text-overflow: ellipsis;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2.25px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    
  &:hover {
    border: 1.5px solid ${(props) => props.active ? 
      "transparent" : "#3A3A3A"};
    background: ${(props) => props.active ? 
      "#888888": "#F4F5F6"};
    cursor: pointer;
  }
  &:focus {
    border: 1.5px solid ${(props) => props.active ? 
      "transparent" : "#3A3A3A"};
    background: ${(props) => props.active ? 
      "#888888": "#F4F5F6"};
  }
  &:disabled {
    background: "#EAEAEA";
    color: "#959595";
    border: 1.5px solid "#EEEEEE";
    cursor: not-allowed;
    span {
      color: "#959595";
    }
  }
  span {
    width: 100%;
    text-overflow: ellipsis;
    overflow-x: hidden;
    font-size: 14px;
    color: ${(props) => props.active ? 
      "#FFFFFF" : "#3A3A3A"};
  }
`;

export const IconPrimary = styled.div<{ 
  active: boolean, 
  disabled: boolean,
  leftAlign: boolean
}>`
  svg {
    height: 20px;
    width: 15px;
    margin: ${(props) => props.leftAlign ? "0 12.5px 0 0" : "0 0 0 12.5px"};
    padding: 3.5px 0 0 0;
    fill: ${(props) => props.disabled ?
    props.theme.colors.button.primary.disabled.label : props.active ? 
    "#FFFFFF" : "#3A3A3A"};
  }
`;
import styled from "styled-components";

export const BagBtn = styled.button`
  position: static;
  width: 140px;
  height: 43px;
  left: 0px;
  top: 0px;

  ${props => props.buttonType} {
    text-transform: uppercase;
  background: #ffffff;
  border: 1px solid #1d1f22;
  box-sizing: border-box;

  :hover {
    background: #1d1f22;
    color: #ffffff;
  }
  :disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
    pointer-events: none;
  }}

  ${props => !props.buttonType} {
    text-transform: uppercase;
  background: #5ECE7B;
  border: none;
  box-sizing: border-box;
  color: #ffffff;
  :hover {
    opacity: 0.7;
  }
  :disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
    pointer-events: none;
  }}
`;

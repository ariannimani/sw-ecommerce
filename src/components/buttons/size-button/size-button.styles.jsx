import styled from "styled-components";

export const SizeBtn = styled.button`
  width: 24px;
  height: 24px;
  left: 1044px;
  top: 247px;
  border: 1px solid #1d1f22;
  box-sizing: border-box;
  margin: 5px;

  :active {
    background: #1d1f22;
    color: #ffffff;
  }

  :disabled {
    background-color: #ffffff;
    color: #a6a6a6;
    border: 1px solid #a6a6a6;
  }
`;

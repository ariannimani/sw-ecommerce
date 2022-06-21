import styled from "styled-components";

export const AttributeBtn = styled.button`
  width: auto;
  height: ${(props) => (props.primary ? "24px" : "18px")};
  font-size: ${(props) => (props.primary ? "15px" : "10px")};
  left: 1044px;
  top: 247px;
  border: 1px solid #1d1f22;
  box-sizing: border-box;
  margin: 5px;
  /*background-color: ${(props) =>
    props.background ? props.background : ""};*/

  :disabled {
    background-color: #ffffff;
    color: #a6a6a6;
    border: 1px solid #a6a6a6;
  }
`;

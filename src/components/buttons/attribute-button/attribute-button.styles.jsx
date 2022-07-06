import styled from "styled-components";

export const AttributeBtn = styled.button`
  width: ${(props) =>
    props.cartItem
      ? "auto"
      : props.attribute === "+" || props.attribute === "-"
      ? "24px"
      : "auto"};
  height: ${(props) =>
    props.primary
      ? "24px"
      : props.cart
      ? "14px"
      : props.cartItem
      ? "32px"
      : props.cartDropdown
      ? "16px"
      : "24px"};
  min-height: ${(props) => (props.primary ? "" : props.type ? "" : "24px")};
  font-size: ${(props) =>
    props.primary
      ? "15px"
      : props.cartItem
      ? "18px"
      : props.attribute === "+" || props.attribute === "-"
      ? "18px"
      : "10px"};
  min-width: ${(props) =>
    props.primary
      ? "24px"
      : props.cartDropdown && props.type
      ? "16px"
      : props.cartItem
      ? "32px"
      : "24px"};
  left: 1044px;
  top: 247px;
  border: ${(props) =>
    props.cart
      ? "none"
      : (props) =>
          props.type && props.selected
            ? "2px solid #5ECE7B"
            : props.type && !props.selected
            ? "none"
            : "1px solid #1d1f22"};
  background-color: ${(props) =>
    props.cart
      ? "#000"
      : (props) => (!props.type && props.selected ? "#1d1f22" : "#fff")};
  color: ${(props) =>
    props.cart
      ? "#fff"
      : (props) => (!props.type && props.selected ? "#fff" : "")};
  opacity: ${(props) => (props.cart ? "0.7" : "1")};
  box-sizing: border-box;
  margin: 5px;

  :disabled {
    background-color: #ffffff;
    color: #a6a6a6;
    border: 1px solid #a6a6a6;
  }
`;

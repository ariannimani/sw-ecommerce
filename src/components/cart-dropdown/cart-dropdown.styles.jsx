import styled from "styled-components";

export const CartDropDownContainer = styled.div`
  padding: 0;
  overflow: hidden;
  z-index: 1;
  position: absolute;
  background-color: white;
`;

export const CartDropDownTitleSpan = styled.span`
  font-weight: 600;
`;

export const CartDropDownTitle = styled.div`
  font-weight: 400;
`;

export const CartDropDownProducts = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

export const CartDropdownTotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
`;

export const CartDropdownButtons = styled.div`
  display: flex;
  gap: 5px;
`;

export const CartDropdownLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 10px;
`;

export const CartDropdownRight = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  img {
    width: 105px;
    height: 137px;
    margin-right: 10px;
  }
  span {
    margin: auto;
  }
`;

export const IncrementDecrement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

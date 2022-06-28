import styled from "styled-components";
import AttributeButton from "../buttons/attribute-button/attribute-button.component";

export const CartDropDownContainer = styled.div`
  width: 325px;
  left: 0px;
  display: block;
  float: right;
  max-height: 677px;
  min-height: 200px;
  top: 100%;
  margin-left: 10px;
  margin-right: 10px;
`;

export const CartDropDownTitleSpan = styled.span`
  font-weight: 700;
`;

export const CartDropDownTitle = styled.div`
  font-weight: 500;
  margin-bottom: 40px;
  margin-top: 20px;
`;

export const CartDropDownProducts = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CartDropdownTotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const CartDropdownButtons = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-size: 15px;
  }
`;

export const CartDropdownBagButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  span {
    font-size: 15px;
  }
`;

export const CartDropdownLeft = styled.div`
  width: 121px;
  display: flex;
  flex-direction: column;

  margin-left: 10px;
`;

export const CartDropdownRight = styled.div`
  width: 145px;
  height: 190px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 5px;
  img {
    display: block;
    margin: auto;
  }
  span {
    margin: auto;
  }
`;

export const IncrementDecrement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 45px;
`;

export const EmptyCart = styled.span`
  padding: 80px;
  margin-top: 200px;
  font-size: 24px;
`;

export const DivCart = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const CartImage = styled.img`
  margin-top: auto;
  margin-right: auto;
  width: 100px;
  height: auto;
`;

export const CartImageContainer = styled.div`
  position: relative;
  ${AttributeButton} {
    right: 10px;
  }
`;

export const CartImageAttributes = styled.div`
  margin-left: 50px;
`;

export const AttributesContainer = styled.div``;

export const CartPrice = styled.span`
  font-weight: 500;
  margin-top: 10px;
`;

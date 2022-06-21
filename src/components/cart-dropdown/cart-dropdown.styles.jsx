import styled from "styled-components";
import AttributeButton from "../buttons/attribute-button/attribute-button.component";

export const CartDropDownContainer = styled.div`
  width: 325px;
  left: 0px;
  display: block;
  float: right;
  max-height: auto;
  min-height: 200px;
  top: 100%;
  margin-left: 10px;
  margin-right: 10px;
`;

export const CartDropDownTitleSpan = styled.span`
  font-weight: 600;
`;

export const CartDropDownTitle = styled.div`
  font-weight: 400;
  margin-bottom: 40px;
`;

export const CartDropDownProducts = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
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

export const CartDropdownLeft = styled.div`
  width: 121px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 10px;
`;

export const CartDropdownRight = styled.div`
  width: 145px;
  height: 190px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  img {
    max-width: 120px;
    height: 121px;
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
  gap: 25px;
  margin-top: -18px;
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
    bottom: 10px;
    right: 10px;
  }
`;

export const CartImageAttributes = styled.div`
  margin-top: -25px;
  margin-left: 50px;
`;

export const AttributesContainer = styled.div`
  margin-top: 5px;
`;

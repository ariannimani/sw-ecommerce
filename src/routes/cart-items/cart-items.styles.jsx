import styled from "styled-components";
import AttributeButton from "../../components/buttons/attribute-button/attribute-button.component";

export const CartWindow = styled.div`
  margin-top: 220px;
`;
export const CartTitle = styled.div`
  position: absolute;
  width: 84px;
  height: 40px;
  left: 100px;
  top: 160px;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  text-transform: uppercase;
  color: #1d1f22;
`;

export const CartContainer = styled.div`
  width: 1440px;
  height: auto;
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IncrementDecrement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CartRight = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  img {
    width: 141px;
    height: 185px;
    margin-right: 10px;
  }
  span {
    margin: auto;
  }
`;

export const CartLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 10px;
`;

export const CartButtons = styled.div`
  display: flex;
  gap: 5px;
`;

export const ItemName = styled.span`
  width: 292px;
  height: 27px;
  left: 101px;
  top: 323px;

  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 27px;

  color: #1d1f22;
`;

export const ItemPrice = styled.span`
  width: 79px;
  height: 24px;
  left: 100px;
  top: 370px;

  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;

  color: #1d1f22;
`;

export const CartTotal = styled.span`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 24px;
  margin-bottom: 20px;
  margin-top: 40px;
`;

export const CartImage = styled.img`
  margin-top: auto;
  margin-right: auto;
  width: auto;
  height: 80px;
`;

export const CartImageContainer = styled.div`
  position: relative;
  ${AttributeButton} {
    left: 5px;
  }
`;

export const CartImageAttributes = styled.div`
  margin-top: -34px;
  margin-left: 85px;
`;

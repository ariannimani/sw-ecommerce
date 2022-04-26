import styled from "styled-components";

export const CartTitle = styled.div`
  position: absolute;
  width: 84px;
  height: 40px;
  left: 100px;
  top: 160px;
  font-family: "Raleway";
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
  margin-top: 220px;
  display: flex;
  justify-content: space-between;
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

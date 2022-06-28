import styled from "styled-components";
import { Link } from "react-router-dom";

export const CircleIcon = styled.svg`
  position: relative;
  background-image: none;
  margin-left: 310px;
  margin-top: -74px;
  cursor: pointer;
`;

export const ProductContainer = styled.div`
  transition: 0.3s;
  width: 386px;
  height: 444px;
  padding: 16px;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    ${CircleIcon} {
      background-image: url("../../../assets/svg/circle-icon.svg");
      background-repeat: no-repeat;
    }
  }
`;

export const ProductLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export const ProductImage = styled.div`
  height: 330px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  content: url(${(props) => props.image});
  opacity: ${(props) => (props.stock ? "1" : "0.5")};
`;

export const ProductDetails = styled.div`
  padding: 2px 16px;
  margin-top: 20px;
`;

export const ProductPrice = styled.div`
  font-weight: 600;
`;

export const ProductName = styled.div``;

export const ImageContainer = styled.div`
  position: relative;
  text-align: center;
  color: #8d8f9a;
  font-weight: 400;
  font-size: 24px;
`;

export const ImageText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

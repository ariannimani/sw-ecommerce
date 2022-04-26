import styled from "styled-components";

export const ProductContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 386px;
  height: 444px;
  padding: 16px;
  margin-top: 50px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const ProductImage = styled.img`
  width: 384px;
  height: 330px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const ProductDetails = styled.div`
  padding: 2px 16px;
`;

export const ProductPrice = styled.div`
  font-weight: 600;
`;

export const ProductName = styled.div``;

import styled from "styled-components";

export const ProductDetailsContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
`;

export const LeftColumn = styled.div`
  width: 65%;
`;

export const ProductMainImage = styled.div`
  margin-top: 50px;
  img {
    width: 610px;
    height: 511px;
    &:active {
      opacity: 1;
    }
  }
`;

export const RightColumn = styled.div`
  width: 35%;
  margin-top: 80px;
`;

export const ProductHeader = styled.div`
  h1 {
    font-size: 28px;
    text-transform: uppercase;
    text-decoration: none;
  }
  span {
    font-weight: 300;
    font-size: 28px;
  }
`;

export const ProductConfiguration = styled.div``;

export const ProductDescription = styled.div`
  p {
    font-size: 16px;
    line-height: 24px;
    margin: 40px 0;
  }
`;

export const ProductPrice = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  span {
    font-size: 18px;
    font-weight: 600;
    margin-right: 20px;
  }
`;

export const SizeConfig = styled.div`
  margin: 20px 0;
`;
export const SizeChoose = styled.div``;

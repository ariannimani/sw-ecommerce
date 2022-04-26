import React, { Component } from "react";
import BagButton from "../../components/buttons/bag-button/bag-button.component";
import SizeButton from "../../components/buttons/size-button/size-button.component";
import {
  ProductDescription,
  ProductDetailsContainer,
  ProductHeader,
  ProductMainImage,
  ProductPrice,
  LeftColumn,
  RightColumn,
  ProductConfiguration,
  SizeConfig,
  SizeChoose,
} from "./product-details.styles.jsx";

export default class ProductDetails extends Component {
  render() {
    return (
      <ProductDetailsContainer>
        <LeftColumn>
          <ProductMainImage>
            <img src={require("../../img/0-main.jpg")} alt="Image2" />
          </ProductMainImage>
        </LeftColumn>
        <RightColumn>
          <ProductHeader>
            <h1>Apollo</h1>
            <span>Running Shoes</span>
          </ProductHeader>

          <ProductConfiguration>
            <SizeConfig>
              <span>Size</span>

              <SizeChoose>
                <SizeButton productSize="S"></SizeButton>
                <SizeButton productSize="M"></SizeButton>
                <SizeButton productSize="L"></SizeButton>
              </SizeChoose>
            </SizeConfig>
          </ProductConfiguration>
          <ProductPrice>
            <span>PRICE:</span>
            <span>$50.00</span>
          </ProductPrice>
          <BagButton btndata="Add To Cart" />
          <ProductDescription>
            <p>
              Find stunning women's cocktail dresses and party dresses. Stand
              out in lace and metallic cocktail dresses and party dresses from
              all your favorite brands.
            </p>
          </ProductDescription>
        </RightColumn>
      </ProductDetailsContainer>
    );
  }
}

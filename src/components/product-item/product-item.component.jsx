import React, { Component } from "react";
import {
  ProductContainer,
  ProductDetails,
  ProductImage,
  ProductPrice,
  ProductName,
} from "./product-item.styles.jsx";

class ProductItem extends Component {
  render() {
    return (
      <ProductContainer>
        <ProductImage />
        <ProductDetails>
          <ProductName>Jacket</ProductName>
          <ProductPrice>$ 20</ProductPrice>
        </ProductDetails>
      </ProductContainer>
    );
  }
}

export default ProductItem;

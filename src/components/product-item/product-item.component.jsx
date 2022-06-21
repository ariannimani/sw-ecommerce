import React, { Component } from "react";

import {
  ProductContainer,
  ProductDetails,
  ProductImage,
  ProductPrice,
  ProductName,
  CircleIcon,
  ProductLink,
  ImageText,
  ImageContainer,
} from "./product-item.styles.jsx";

class ProductItem extends Component {
  render() {
    const {
      productGallery,
      productName,
      productPrice,
      productID,
      selectedCategory,
      productAttributes,
      selectedAttributes,
      addItemToCart,
      product,
      productStock,
    } = this.props;
    return (
      <ProductContainer>
        <ProductLink to={`/${selectedCategory}/${productID}`}>
          <ImageContainer>
            <ProductImage
              image={productGallery}
              style={productStock === true ? { opacity: 1 } : { opacity: 0.5 }}
            />
            {productStock === true ? "" : <ImageText>OUT OF STOCK</ImageText>}
          </ImageContainer>
          <ProductDetails>
            <ProductName>{productName}</ProductName>
            <ProductPrice>
              {productPrice.currency.symbol} {productPrice.amount}
            </ProductPrice>
          </ProductDetails>
        </ProductLink>
        <CircleIcon
          onClick={
            selectedAttributes.length !== productAttributes.length
              ? () => ""
              : productStock === true
              ? () => {
                  addItemToCart(product, selectedAttributes);
                }
              : () => ""
          }
        />
      </ProductContainer>
    );
  }
}

export default ProductItem;

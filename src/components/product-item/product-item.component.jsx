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
  constructor(props) {
    super(props);
    this.state = {
      selectedFirstAttributes: [],
    };
  }

  selectFirstAttributesHandler = async (product) => {
    const a = product.attributes.map((item) => item.items[0].value);
    const b = product.attributes.map((item) => item.id);
    const id = product.id;
    let combined = a.map((item, index) => {
      return { value: item, type: b[index], id };
    });

    this.setState({ selectedFirstAttributes: combined });
  };

  emptyAttributes = () => {
    this.setState({ selectedFirstAttributes: [] });
  };

  render() {
    const {
      productGallery,
      productName,
      productPrice,
      productID,
      selectedCategory,
      addItemToCart,
      product,
      productStock,
      productBrand,
      isCartOpen,
    } = this.props;

    return (
      <ProductContainer>
        <ProductLink to={`/${selectedCategory}/${productID}`}>
          <ImageContainer>
            <ProductImage
              image={productGallery}
              stock={productStock}
              isCartOpen={isCartOpen}
            />
            {productStock === true ? "" : <ImageText>OUT OF STOCK</ImageText>}
          </ImageContainer>
          <ProductDetails>
            <ProductName>
              {productBrand} {productName}
            </ProductName>
            <ProductPrice>
              {productPrice.currency.symbol} {productPrice.amount}
            </ProductPrice>
          </ProductDetails>
        </ProductLink>

        <CircleIcon
          onClick={
            productStock === true
              ? async () => {
                  await this.selectFirstAttributesHandler(product);
                  await addItemToCart(
                    product,
                    this.state.selectedFirstAttributes
                  );
                  this.emptyAttributes();
                }
              : () => ""
          }
        />
      </ProductContainer>
    );
  }
}

export default ProductItem;

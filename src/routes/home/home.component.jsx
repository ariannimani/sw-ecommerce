import React, { Component } from "react";

import ProductItem from "../../components/product-item/product-item.component";

import { HomeProducts, HomeContainer, CategoryTitle } from "./home.styles.jsx";

class Home extends Component {
  render() {
    const {
      selectedCategory,
      selectedCurrency,
      productsData,
      addItemToCart,
      isCartOpen,
    } = this.props;

    function priceSelector() {
      const price = productsData.map((product) =>
        product.prices
          .map((item) => item.currency.label)
          .indexOf(selectedCurrency.currency)
      );
      return price[0];
    }

    return (
      <HomeContainer>
        <CategoryTitle>{selectedCategory.toUpperCase()}</CategoryTitle>
        <HomeProducts>
          {productsData.map((product) => (
            <ProductItem
              key={product.id}
              productID={product.id}
              productName={product.name}
              productBrand={product.brand}
              productAttributes={product.attributes}
              product={product}
              productStock={product.inStock}
              productPrice={product.prices[priceSelector()]}
              productGallery={product.gallery[0]}
              selectedCategory={selectedCategory}
              addItemToCart={addItemToCart}
              isCartOpen={isCartOpen}
            />
          ))}
        </HomeProducts>
      </HomeContainer>
    );
  }
}

export default Home;

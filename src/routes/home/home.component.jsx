import React, { Component } from "react";

import ProductItem from "../../components/product-item/product-item.component";

import { HomeProducts, HomeContainer, CategoryTitle } from "./home.styles.jsx";

class Home extends Component {
  render() {
    const { selectedCategory, productsData, selectedCurrency, selectedId, selectedAttributes, addItemToCart } =
      this.props;

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
          {selectedCategory === "all"
            ? productsData.map((product) => (
                <ProductItem
                  key={product.id}
                  productID={product.id}
                  productName={product.name}
                  product={product}
                  productAttributes={product.attributes}
                  productStock={product.inStock}
                  productPrice={product.prices[priceSelector()]}
                  productGallery={product.gallery[0]}
                  productsData={productsData}
                  selectedId={selectedId}
                  selectedCategory={selectedCategory}
                  selectedAttributes={selectedAttributes}
                  addItemToCart={addItemToCart}
                />
                
              ))
            : productsData
                .filter((product) => product.category === selectedCategory)
                .map((product) => (
                  <ProductItem
                    key={product.id}
                    productID={product.id}
                    productName={product.name}
                    product={product}
                    productAttributes={product.attributes}
                    productStock={product.inStock}
                    productPrice={product.prices[priceSelector()]}
                    productGallery={product.gallery[0]}
                    productsData={productsData}
                    selectedId={selectedId}
                    selectedCategory={selectedCategory}
                    selectedAttributes={selectedAttributes}
                    addItemToCart={addItemToCart}
                  />
                ))}
        </HomeProducts>
      </HomeContainer>
    );
  }
}

export default Home;

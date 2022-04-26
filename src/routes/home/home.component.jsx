import React, { Component } from "react";
import ProductItem from "../../components/product-item/product-item.component";
import { HomeProducts, HomeContainer, CategoryTitle } from "./home.styles.jsx";
import { PRODUCTS_DATA_BY_CATEGORY } from "../../graphql/queries";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
    };
  }
  componentDidMount() {
    PRODUCTS_DATA_BY_CATEGORY.then((results) => {
      console.log(results.data);
      //this.setState({
      //  productData: results.data.categories,
      //});
    });
  }
  render() {
    return (
      <HomeContainer>
        <CategoryTitle>Category Name</CategoryTitle>
        <HomeProducts>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </HomeProducts>
      </HomeContainer>
    );
  }
}

export default Home;

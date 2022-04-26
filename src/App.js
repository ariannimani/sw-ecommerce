import React, { Component } from "react";
import { PRODUCTS_DATA, CATEGORY_DATA } from "./graphql/queries";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import "./App.styles.jsx";
import ProductDetails from "./routes/product-details/product-details.component";
import CartItems from "./routes/cart-items/cart-items.component";
import { Body, Container } from "./App.styles.jsx";
import { Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Container>
        <Body>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="all" element={<Home />} />
            <Route path="clothes" element={<Home />} />
            <Route path="tech" element={<Home />} />
            <Route path="cart" element={<CartItems />} />
          </Routes>
        </Body>
      </Container>
    );
  }
}

export default App;

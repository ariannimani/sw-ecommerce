import React, { Component } from "react";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import "./App.styles.jsx";
import ProductDetails from "./routes/product-details/product-details.component";
import CartItems from "./routes/cart-items/cart-items.component";
import { Body, Container } from "./App.styles.jsx";
import { Switch, Route } from "react-router-dom";
import {
  fetchCategories,
  fetchCurrency,
  fetchProductsByCategory,
} from "./graphql/fetchData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCartOpen: false,
      productsData: [],
      categoriesData: [],
      selectedCategory: `all`,
      currencyData: [],
      selectedCurrency: { currency: `USD`, symbol: "$" },
      cartItems: [],
      selectedId: "",
      selectedAttributes: [],
      cartTotal: 0,
      galleryIndex: [],
      checkOutData: [],
    };
  }

  dataByCategory = () => {
    this.state.selectedCategory === "all"
      ? this.state.productsData.map((product) => {
          return product;
        })
      : this.state.productsData
          .filter((product) => product.category === this.state.selectedCategory)
          .map((product) => {
            return product;
          });
  };

  priceSelector = () => {
    const cartItems = this.state.cartItems;
    const price = cartItems.map((product) =>
      product.prices
        .map((item) => item.currency.label)
        .indexOf(this.state.selectedCurrency.currency)
    );
    return price[0];
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  categoryForGql = () => {
    const category = this.state.selectedCategory;
    return category;
  };

  addCartItem = (cart, productToAdd, sAttributes) => {
    const existingCartItem = cart.find(
      (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
      return cart.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
              selectedAttributes: sAttributes,
            }
          : cartItem
      );
    }

    return [
      ...cart,
      { ...productToAdd, quantity: 1, selectedAttributes: sAttributes },
    ];
  };

  updateCartItem = (cart, product, selectedAttribute, newAttributes) => {
    const existingCartItem = cart.find(
      (cartItem) => cartItem.id === product.id
    );

    const existingAttribute = existingCartItem.selectedAttributes.find(
      (attribute) =>
        attribute.type ===
        this.state.selectedAttributes.map((newAttr) => newAttr.type).toString()
    );
    const thisCart = cart.filter((cartItem) => cartItem.id !== product.id);

    const thisAttribute = existingCartItem.selectedAttributes.filter(
      (attribute) =>
        attribute.type !==
        selectedAttribute.map((newAttr) => newAttr.type).toString()
    );

    if (existingCartItem && existingAttribute) {
      return cart.map((cartItem) =>
        cartItem.id === product.id
          ? {
              ...cartItem,
              selectedAttributes: [...thisAttribute, selectedAttribute[0]],
            }
          : cartItem
      );
    }

    return [
      ...thisCart,
      {
        ...product,
        selectedAttributes: { ...thisAttribute, selectedAttribute },
      },
    ];
  };
  updateItemToCart = (product, sAttributes) => {
    this.setState({
      cartItems: this.updateCartItem(
        this.state.cartItems,
        product,
        sAttributes
      ),
    });
    this.emptyAttributes();
  };

  removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove
    );
    if (existingCartItem.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove);
    }
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };

  addItemToCart = (product, sAttributes) => {
    this.setState({
      cartItems: this.addCartItem(this.state.cartItems, product, sAttributes),
    });
    this.emptyAttributes();
  };

  updateCart = async (attribute, attr, itemid, item) => {
    await this.selectedAttributesHandler(attribute, attr, itemid);
    this.updateItemToCart(item, this.state.selectedAttributes);
  };

  removeItemFromCart = (cartItemToRemove) =>
    this.setState({
      cartItems: this.removeCartItem(this.state.cartItems, cartItemToRemove),
    });

  selectAttribute = (attribute, newAttribute, type, id) => {
    const existingAttribute = attribute.find(
      (attr) => attr.type === type && attr.id === id
    );

    if (existingAttribute) {
      return attribute.map((attr) =>
        attr.type === type && attr.id === id
          ? { ...attr, value: newAttribute }
          : attr
      );
    }

    return [...attribute, { value: newAttribute, type, id }];
  };

  selectedAttributesHandler = (newAttribute, type, id) => {
    this.setState({
      ...this.state,
      selectedAttributes: this.selectAttribute(
        this.state.selectedAttributes,
        newAttribute,
        type,
        id
      ),
    });
  };

  cartTotalHandler = (cart) => {
    if (cart.length > 0) {
      const newCartTotal = cart.reduce(
        (total, cartItem) =>
          total +
          cartItem.quantity * cartItem.prices[this.priceSelector()].amount,
        0
      );
      return newCartTotal;
    }
  };

  emptyAttributes = () => {
    this.setState({ selectedAttributes: [] });
  };
  componentDidMount() {
    fetchCategories.apply().then((results) => {
      this.setState({
        categoriesData: results.data.categories,
      });
    });
    fetchProductsByCategory.apply().then((results) => {
      this.setState({
        productsData: results.data.category.products,
      });
    });
    fetchCurrency.apply().then((results) => {
      this.setState({
        currencyData: results.data.currencies,
      });
    });
    this.scrollToTop();
  }
  componentDidUpdate() {
    if (this.state.cartTotal !== this.cartTotalHandler(this.state.cartItems)) {
      this.setState({ cartTotal: this.cartTotalHandler(this.state.cartItems) });
    }
  }

  isCartOpenHandler = () => {
    this.state.isCartOpen
      ? this.setState({ isCartOpen: false })
      : this.setState({ isCartOpen: true });
  };
  selectCategoryHandler = (category) => {
    this.setState({ selectedCategory: category });
  };

  changeCurrencyHandler = (currency, symbol) => {
    this.setState({ selectedCurrency: { currency: currency, symbol: symbol } });
  };

  imageShift = (imageDataArray, next) => {
    const existingGallery = this.state.galleryIndex.find(
      (gallery) => gallery.id === imageDataArray.id
    );
    const numImages = Number(imageDataArray.gallery.length);
    let shiftedIndex = Number(
      this.state.galleryIndex.map((i) =>
        i.id === imageDataArray.id ? i.index : 0
      )
    );
    if (existingGallery) {
      return this.state.galleryIndex.map((gal) => {
        if (gal.id === imageDataArray.id) {
          if (next === "left") {
            shiftedIndex = (gal.index + 1) % numImages;
          } else {
            shiftedIndex = gal.index - 1;
            if (shiftedIndex < 0) {
              shiftedIndex += numImages;
            }
          }
          return {
            ...gal,
            index: shiftedIndex,
            id: imageDataArray.id,
          };
        } else {
          return gal;
        }
      });
    }
    return [...this.state.galleryIndex, { index: 1, id: imageDataArray.id }];
  };

  imageShiftHandler = (imageDataArray, next) => {
    this.setState({
      galleryIndex: this.imageShift(imageDataArray, next),
    });
  };

  imageIndex = (item) => {
    const gallery = this.state.galleryIndex;
    let index;
    if (gallery.length) {
      gallery.map((gal) => (gal.id === item.id ? (index = gal.index) : ""));
    } else {
      index = 0;
    }
    return typeof index === "undefined" ? 0 : index;
  };

  cleanCart = () => {
    this.setState({ cartItems: [] });
  };

  checkOut = () => {
    this.setState({ checkOutData: this.state.cartItems });
  };

  render() {
    const {
      isCartOpen,
      productsData,
      categoriesData,
      selectedCategory,
      currencyData,
      selectedCurrency,
      cartItems,
      selectedId,
      selectedAttributes,
      cartTotal,
    } = this.state;

    return (
      <Container>
        <Body>
          <Navigation
            isCartOpen={isCartOpen}
            categoriesData={categoriesData}
            selectCategoryHandler={this.selectCategoryHandler}
            isCartOpenHandler={this.isCartOpenHandler}
            currencyData={currencyData}
            changeCurrencyHandler={this.changeCurrencyHandler}
            selectedCurrency={selectedCurrency}
            cartItems={cartItems}
            removeItemFromCart={this.removeItemFromCart}
            addItemToCart={this.addItemToCart}
            cartTotal={cartTotal}
            updateCart={this.updateCart}
            imageShiftHandler={this.imageShiftHandler}
            imageIndex={this.imageIndex}
            checkOut={this.checkOut}
          />
          <Switch>
            <Route exact path="/">
              <Home
                selectedCategory={selectedCategory}
                productsData={productsData}
                selectedCurrency={selectedCurrency}
                selectedId={selectedId}
                selectedAttributes={selectedAttributes}
                addItemToCart={this.addItemToCart}
              />
            </Route>
            <Route
              exact
              path={`/${selectedCategory}/:id`}
              render={({ match }) => (
                <ProductDetails
                  productsData={productsData}
                  addItemToCart={this.addItemToCart}
                  selectedCurrency={selectedCurrency}
                  cartItems={cartItems}
                  id={match.params.id}
                  selectedAttributesHandler={this.selectedAttributesHandler}
                  selectedAttributes={selectedAttributes}
                  scrollToTop={this.scrollToTop}
                />
              )}
            />
            <Route exact path={`/${selectedCategory}`}>
              <Home
                selectedCategory={selectedCategory}
                productsData={productsData}
                selectedCurrency={selectedCurrency}
                selectedAttributes={selectedAttributes}
                addItemToCart={this.addItemToCart}
              />
            </Route>
            <Route exact path="/cart">
              <CartItems
                selectedCurrency={selectedCurrency}
                cartItems={cartItems}
                removeItemFromCart={this.removeItemFromCart}
                addItemToCart={this.addItemToCart}
                cartTotal={cartTotal}
                isCartOpen={isCartOpen}
                selectCategoryHandler={this.selectCategoryHandler}
                isCartOpenHandler={this.isCartOpenHandler}
                scrollToTop={this.scrollToTop}
                updateCart={this.updateCart}
                selectedAttributes={selectedAttributes}
                imageShiftHandler={this.imageShiftHandler}
                imageIndex={this.imageIndex}
                cleanCart={this.cleanCart}
              />
            </Route>
          </Switch>
        </Body>
      </Container>
    );
  }
}

export default App;

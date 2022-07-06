import React, { Component, Fragment } from "react";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {
  NavContainer,
  Dropdown,
  NavItem,
  NavItems,
  DropdownContent,
  CartSVG,
  LogoSVG,
  DrpBtn,
  DropdownContainer,
  DropdownItems,
  NumberItem,
  DropdownCart,
} from "./navigation.styles.jsx";

class Navigation extends Component {
  container = React.createRef();
  dropdown = React.createRef();

  state = {
    open: false,
  };
  handleButtonClick = () => {
    this.setState((state) => {
      return {
        open: !state.open,
      };
    });
  };

  handleClickOutside = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        open: false,
      });
    }
  };

  handleCartClickOutsideHandler = (event) => {
    if (
      this.dropdown.current &&
      !this.dropdown.current.contains(event.target)
    ) {
      this.props.handleCartClickOutside();
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    document.addEventListener("mousedown", this.handleCartClickOutsideHandler);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
    document.removeEventListener(
      "mousedown",
      this.handleCartClickOutsideHandler
    );
  }

  render() {
    const {
      isCartOpen,
      categoriesData,
      selectedCurrency,
      currencyData,
      selectCategoryHandler,
      changeCurrencyHandler,
      cartItems,
      removeItemFromCart,
      addItemToCart,
      cartTotal,
      updateCart,
      priceSelector,
      imageShiftHandler,
      imageIndex,
      checkOut,
      handleCartClick,
    } = this.props;

    return (
      <Fragment>
        <NavContainer>
          <NavItems>
            {categoriesData.map((category) => (
              <NavItem
                to={`/${category.name}`}
                key={category.name}
                onClick={() => selectCategoryHandler(category.name)}
              >
                {category.name}
              </NavItem>
            ))}
          </NavItems>
          <h3 className="nav-logo">
            <LogoSVG />
          </h3>
          <NavItems>
            <DropdownContainer>
              <DrpBtn onClick={() => this.handleButtonClick()}>
                {selectedCurrency.symbol}
              </DrpBtn>
              {this.state.open && (
                <Dropdown>
                  <DropdownContent ref={this.container}>
                    {currencyData.map((currency) => (
                      <DropdownItems
                        key={currency.label}
                        onClick={() => {
                          changeCurrencyHandler(
                            currency.label,
                            currency.symbol
                          );
                          this.handleButtonClick();
                        }}
                        value={currency.label}
                      >
                        {currency.symbol} {currency.label}
                      </DropdownItems>
                    ))}
                  </DropdownContent>
                </Dropdown>
              )}
            </DropdownContainer>

            <Fragment>
              <CartSVG onClick={() => handleCartClick()} />
              {cartItems.length > 0 ? (
                <NumberItem>
                  {cartItems.reduce(
                    (total, items) => (total = total + items.quantity),
                    0
                  )}
                </NumberItem>
              ) : (
                <NumberItem>0</NumberItem>
              )}
            </Fragment>
          </NavItems>

          {isCartOpen && (
            <DropdownCart ref={this.dropdown}>
              <CartDropdown
                cartItems={cartItems}
                selectedCurrency={selectedCurrency}
                removeItemFromCart={removeItemFromCart}
                addItemToCart={addItemToCart}
                cartTotal={cartTotal}
                updateCart={updateCart}
                priceSelector={priceSelector}
                imageShiftHandler={imageShiftHandler}
                imageIndex={imageIndex}
                checkOut={checkOut}
                handleCartClickOutside={this.props.handleCartClickOutside}
              />
            </DropdownCart>
          )}
        </NavContainer>
      </Fragment>
    );
  }
}

export default Navigation;

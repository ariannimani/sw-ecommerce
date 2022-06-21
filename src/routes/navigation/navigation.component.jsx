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
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  render() {
    const {
      categoriesData,
      selectedCurrency,
      currencyData,
      isCartOpenHandler,
      isCartOpen,
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
            <DropdownContainer ref={this.container}>
              <DrpBtn onClick={this.handleButtonClick}>
                {selectedCurrency.symbol}
              </DrpBtn>
              {this.state.open && (
                <Dropdown>
                  <DropdownContent>
                    {currencyData.map((currency) => (
                      <DropdownItems
                        key={currency.label}
                        onClick={() =>
                          changeCurrencyHandler(currency.label, currency.symbol)
                        }
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
              <CartSVG onClick={isCartOpenHandler} />
              {cartItems.length > 0 ? (
                <NumberItem>{cartItems.length}</NumberItem>
              ) : (
                <NumberItem>0</NumberItem>
              )}
            </Fragment>
          </NavItems>
          {isCartOpen && (
            <DropdownCart>
              <CartDropdown
                cartItems={cartItems}
                selectedCurrency={selectedCurrency}
                removeItemFromCart={removeItemFromCart}
                addItemToCart={addItemToCart}
                cartTotal={cartTotal}
                isCartOpenHandler={isCartOpenHandler}
                updateCart={updateCart}
                priceSelector={priceSelector}
                imageShiftHandler={imageShiftHandler}
                imageIndex={imageIndex}
                checkOut={checkOut}
              />
            </DropdownCart>
          )}
        </NavContainer>
      </Fragment>
    );
  }
}

export default Navigation;

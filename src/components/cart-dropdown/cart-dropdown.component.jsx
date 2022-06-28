import { withRouter } from "react-router-dom";
import React, { Component, Fragment } from "react";
import BagButton from "../buttons/bag-button/bag-button.component";

import {
  CartDropDownContainer,
  CartDropDownTitle,
  CartDropDownTitleSpan,
  CartDropDownProducts,
  CartDropdownButtons,
  CartDropdownLeft,
  CartDropdownRight,
  CartDropdownTotal,
  IncrementDecrement,
  EmptyCart,
  DivCart,
  CartImage,
  CartImageContainer,
  CartPrice,
  AttributesContainer,
  CartDropdownBagButtons,
} from "./cart-dropdown.styles.jsx";
import AttributeButton from "../buttons/attribute-button/attribute-button.component";
import {
  SizeChoose,
  SizeConfig,
} from "../../routes/product-details/product-details.styles";
class CartDropdown extends Component {
  render() {
    const {
      cartItems,
      selectedCurrency,
      removeItemFromCart,
      addItemToCart,
      cartTotal,
      checkOut,
    } = this.props;

    function priceSelector() {
      const price = cartItems.map((product) =>
        product.prices
          .map((item) => item.currency.label)
          .indexOf(selectedCurrency.currency)
      );
      return price[0];
    }

    return (
      <CartDropDownContainer>
        <CartDropDownTitle>
          <CartDropDownTitleSpan>My Bag</CartDropDownTitleSpan>,{" "}
          {cartItems.reduce(
            (total, items) => (total = total + items.quantity),
            0
          )}{" "}
          items
        </CartDropDownTitle>
        {cartItems.length > 0 ? (
          <Fragment>
            {cartItems.map((item, index) => (
              <CartDropDownProducts key={index}>
                <CartDropdownLeft>
                  <span>
                    {item.brand} {item.name}
                  </span>

                  <CartPrice>
                    {item.prices[priceSelector()].currency.symbol}
                    {item.prices[priceSelector()].amount}
                  </CartPrice>

                  {item.attributes.length !== 0 ? (
                    <CartDropdownButtons>
                      <SizeConfig>
                        {item.attributes.map((at) => (
                          <AttributesContainer key={at.id}>
                            <span>{at.name}:</span>
                            <SizeChoose>
                              {at.items.map((attribute) => (
                                <AttributeButton
                                  primary={false}
                                  key={attribute.id}
                                  attribute={
                                    attribute.value.startsWith("#")
                                      ? ""
                                      : attribute.value
                                  }
                                  style={
                                    at.type === "swatch"
                                      ? item.selectedAttributes.find(
                                          (i) =>
                                            i.value === attribute.value &&
                                            at.id === i.type &&
                                            item.id === i.id
                                        )
                                        ? {
                                            backgroundColor: attribute.value,
                                            width: "16px",
                                            border: "2px solid #5ECE7B",
                                            height: "16px",
                                          }
                                        : {
                                            backgroundColor: attribute.value,
                                            width: "16px",
                                            border: "0px",
                                            height: "16px",
                                          }
                                      : item.selectedAttributes.find(
                                          (i) =>
                                            i.value === attribute.value &&
                                            at.id === i.type &&
                                            item.id === i.id
                                        )
                                      ? {
                                          backgroundColor: "#1d1f22",
                                          color: "#ffffff",
                                          minWidth: "24px",
                                        }
                                      : {
                                          backgroundColor: "#ffffff",
                                          width: "auto",
                                          minWidth: "24px",
                                        }
                                  }
                                ></AttributeButton>
                              ))}
                            </SizeChoose>
                          </AttributesContainer>
                        ))}
                      </SizeConfig>
                    </CartDropdownButtons>
                  ) : (
                    ""
                  )}
                </CartDropdownLeft>
                <CartDropdownRight>
                  <IncrementDecrement>
                    <AttributeButton
                      primary={false}
                      attribute="+"
                      onClick={() =>
                        addItemToCart(item, item.selectedAttributes)
                      }
                    ></AttributeButton>
                    <span>{item.quantity}</span>
                    <AttributeButton
                      primary={false}
                      attribute="-"
                      onClick={() =>
                        removeItemFromCart(item.id, item.selectedAttributes)
                      }
                    ></AttributeButton>
                  </IncrementDecrement>
                  <CartImageContainer>
                    <CartImage src={item.gallery[0]} alt={item.name} />
                  </CartImageContainer>
                </CartDropdownRight>
              </CartDropDownProducts>
            ))}
          </Fragment>
        ) : (
          <DivCart>
            <EmptyCart>Cart is Empty</EmptyCart>
          </DivCart>
        )}
        <CartDropdownTotal>
          <span>Total</span>
          <span>
            {selectedCurrency.symbol}{" "}
            {isNaN(parseFloat(cartTotal).toFixed(2))
              ? 0
              : parseFloat(cartTotal).toFixed(2)}
          </span>
        </CartDropdownTotal>
        <CartDropdownBagButtons>
          <BagButton
            btndata="View Bag"
            onClick={() => {
              this.props.history.push("/cart");
            }}
          />
          <BagButton
            buttonType={true}
            btndata="Check Out"
            onClick={() => checkOut()}
          />
        </CartDropdownBagButtons>
      </CartDropDownContainer>
    );
  }
}
export default withRouter(CartDropdown);

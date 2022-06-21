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
  CartImageAttributes,
  AttributesContainer,
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
      isCartOpenHandler,
      updateCart,
      imageShiftHandler,
      imageIndex,
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
          {cartItems.length} items
        </CartDropDownTitle>
        {cartItems.length > 0 ? (
          <Fragment>
            {cartItems.map((item) => (
              <CartDropDownProducts key={item.id}>
                <CartDropdownLeft>
                  <span>{item.name}</span>

                  <span>
                    <strong>
                      {item.prices[priceSelector()].currency.symbol}
                      {item.prices[priceSelector()].amount}
                    </strong>
                  </span>

                  {item.attributes.length !== 0 ? (
                    <CartDropdownButtons>
                      <SizeConfig>
                        {item.attributes.map((at) => (
                          <AttributesContainer key={at.id}>
                            <span>{at.name}</span>
                            <SizeChoose>
                              {at.items.map((attribute) => (
                                <AttributeButton
                                  primary={false}
                                  key={attribute.id}
                                  onClick={() =>
                                    updateCart(
                                      attribute.value,
                                      at.id,
                                      item.id,
                                      item
                                    )
                                  }
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
                                            width: "18px",
                                            border: "2px solid #5ECE7B",
                                          }
                                        : {
                                            backgroundColor: attribute.value,
                                            width: "18px",
                                            border: "0px",
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
                                        }
                                      : {
                                          backgroundColor: "#ffffff",
                                          width: "auto",
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
                      onClick={() => removeItemFromCart(item.id)}
                    ></AttributeButton>
                  </IncrementDecrement>
                  <CartImageContainer>
                    <CartImage
                      src={item.gallery[imageIndex(item)]}
                      alt={item.name}
                    />
                    <CartImageAttributes>
                      <AttributeButton
                        style={{
                          border: "none",
                          backgroundColor: "#000",
                          color: "#fff",
                          opacity: 0.7,
                          height: "14px",
                        }}
                        primary={false}
                        attribute="<"
                        onClick={() => imageShiftHandler(item, "right")}
                      />

                      <AttributeButton
                        style={{
                          border: "none",
                          backgroundColor: "#000",
                          color: "#fff",
                          opacity: 0.7,
                          height: "14px",
                        }}
                        primary={false}
                        attribute=">"
                        onClick={() => imageShiftHandler(item, "left")}
                      />
                    </CartImageAttributes>
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
        <CartDropdownButtons>
          <BagButton
            btndata="View Bag"
            onClick={() => {
              this.props.history.push("/cart");
              isCartOpenHandler();
            }}
          />
          <BagButton
            buttonType={true}
            btndata="Check Out"
            onClick={() => checkOut()}
          />
        </CartDropdownButtons>
      </CartDropDownContainer>
    );
  }
}
export default withRouter(CartDropdown);

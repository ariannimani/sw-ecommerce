import React, { Component, Fragment } from "react";
import {
  CartTitle,
  CartContainer,
  CartRight,
  IncrementDecrement,
  CartLeft,
  CartButtons,
  ItemName,
  ItemPrice,
  CartWindow,
  CartTotal,
  CartImageContainer,
  CartImage,
  CartImageAttributes,
} from "./cart-items.styles";
import AttributeButton from "../../components/buttons/attribute-button/attribute-button.component";
import BagButton from "../../components/buttons/bag-button/bag-button.component";

export default class CartItems extends Component {
  componentDidMount() {
    this.props.scrollToTop();
  }
  render() {
    const {
      cartItems,
      selectedCurrency,
      cartTotal,
      removeItemFromCart,
      updateCart,
      addItemToCart,
      imageShiftHandler,
      imageIndex,
      cleanCart,
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
      <Fragment>
        <CartTitle>Cart</CartTitle>
        <CartWindow>
          {cartItems.map((item) => (
            <CartContainer key={item.id}>
              <CartLeft>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>
                  {item.prices[priceSelector()].currency.symbol}
                  {item.prices[priceSelector()].amount}
                </ItemPrice>
                {item.attributes.length !== 0 ? (
                  <Fragment>
                    {item.attributes.map((attr) => (
                      <Fragment key={attr.id}>
                        <span>{attr.name}</span>
                        <CartButtons>
                          {attr.items.map((attribute) => (
                            <AttributeButton
                              primary={false}
                              key={attribute.id}
                              onClick={() =>
                                updateCart(
                                  attribute.value,
                                  attr.id,
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
                                attr.type === "swatch"
                                  ? item.selectedAttributes.find(
                                      (i) =>
                                        i.value === attribute.value &&
                                        attr.id === i.type &&
                                        item.id === i.id
                                    )
                                    ? {
                                        backgroundColor: attribute.value,
                                        width: "32px",
                                        height: "32px",
                                        border: "2px solid #5ECE7B",
                                      }
                                    : {
                                        backgroundColor: attribute.value,
                                        width: "32px",
                                        height: "32px",
                                        border: "0px",
                                      }
                                  : item.selectedAttributes.find(
                                      (i) =>
                                        i.value === attribute.value &&
                                        attr.id === i.type &&
                                        item.id === i.id
                                    )
                                  ? {
                                      backgroundColor: "#1d1f22",
                                      color: "#ffffff",
                                      width: "65px",
                                      height: "45px",
                                    }
                                  : {
                                      backgroundColor: "#ffffff",

                                      width: "65px",
                                      height: "45px",
                                    }
                              }
                            ></AttributeButton>
                          ))}
                        </CartButtons>
                      </Fragment>
                    ))}
                  </Fragment>
                ) : (
                  ""
                )}
              </CartLeft>
              <CartRight>
                <IncrementDecrement>
                  <AttributeButton
                    primary={false}
                    attribute="+"
                    style={{
                      width: "32px",
                      height: "32px",
                      fontSize: "18px",
                    }}
                    onClick={() => addItemToCart(item, item.selectedAttributes)}
                  ></AttributeButton>
                  <span>{item.quantity}</span>
                  <AttributeButton
                    primary={false}
                    attribute="-"
                    style={{
                      width: "32px",
                      height: "32px",
                      fontSize: "18px",
                    }}
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
                      }}
                      primary={false}
                      attribute=">"
                      onClick={() => imageShiftHandler(item, "left")}
                    />
                  </CartImageAttributes>
                </CartImageContainer>
              </CartRight>
            </CartContainer>
          ))}
        </CartWindow>
        <hr />
        <CartTotal>
          <span>
            Tax 21%:{" "}
            <strong>
              {selectedCurrency.symbol}{" "}
              {isNaN(parseFloat(cartTotal * 0.21).toFixed(2))
                ? 0
                : parseFloat(cartTotal * 0.21).toFixed(2)}
            </strong>
          </span>
          <span>
            Quantity:{" "}
            <strong>
              {cartItems.reduce(
                (total, items) => (total = total + items.quantity),
                0
              )}
            </strong>
          </span>
          <span>
            Cart Total:{" "}
            <strong>
              {selectedCurrency.symbol}{" "}
              {isNaN(parseFloat(cartTotal).toFixed(2))
                ? 0
                : parseFloat(cartTotal).toFixed(2)}
            </strong>
          </span>
        </CartTotal>
        <BagButton
          buttonType={true}
          btndata="Order"
          onClick={() => cleanCart()}
        />
      </Fragment>
    );
  }
}

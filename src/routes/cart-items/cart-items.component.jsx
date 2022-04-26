import React, { Component, Fragment } from "react";
import {
  CartTitle,
  CartContainer,
  CartRight,
  IncrementDecrement,
  CartLeft,
  CartButtons,
} from "./cart-items.styles";
import SizeButton from "../../components/buttons/size-button/size-button.component";

export default class CartItems extends Component {
  render() {
    return (
      <Fragment>
        <CartTitle>Cart</CartTitle>
        <CartContainer>
          <CartLeft>
            <span>Apollo</span>
            <span>Running Short</span>
            <span>$50.00</span>
            <CartButtons>
              <SizeButton productSize="M" />
              <SizeButton productSize="S" />
            </CartButtons>
          </CartLeft>
          <CartRight>
            <IncrementDecrement>
              <SizeButton productSize="+"></SizeButton>
              <span>1</span>
              <SizeButton productSize="-"></SizeButton>
            </IncrementDecrement>
            <img></img>
          </CartRight>
        </CartContainer>
      </Fragment>
    );
  }
}

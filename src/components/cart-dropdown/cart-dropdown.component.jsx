import React, { Component } from "react";
import BagButton from "../buttons/bag-button/bag-button.component";
import SizeButton from "../buttons/size-button/size-button.component";
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
} from "./cart-dropdown.styles.jsx";
export default class CartDropdown extends Component {
  render() {
    return (
      <CartDropDownContainer>
        <CartDropDownTitle>
          <CartDropDownTitleSpan>My Bag</CartDropDownTitleSpan>, 2 items
        </CartDropDownTitle>
        <CartDropDownProducts>
          <CartDropdownLeft>
            <span>Apollo</span>
            <span>Running Short</span>
            <span>$50.00</span>
            <CartDropdownButtons>
              <SizeButton productSize="M" />
              <SizeButton productSize="S" />
            </CartDropdownButtons>
          </CartDropdownLeft>
          <CartDropdownRight>
            <IncrementDecrement>
              <SizeButton productSize="+"></SizeButton>
              <span>1</span>
              <SizeButton productSize="-"></SizeButton>
            </IncrementDecrement>
            <img></img>
          </CartDropdownRight>
        </CartDropDownProducts>
        <CartDropdownTotal>
          <span>Total</span>
          <span>$100</span>
        </CartDropdownTotal>
        <CartDropdownButtons>
          <BagButton btndata="View Bag"></BagButton>
          <BagButton btndata="Check Out"></BagButton>
        </CartDropdownButtons>
      </CartDropDownContainer>
    );
  }
}

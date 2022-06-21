import React, { Component } from "react";
import { ColorBtn } from "./color-button.styles";

export default class ColorButton extends Component {
  render() {
    return (
      <ColorBtn
        style={{ backgroundColor: this.props.productColor }}
        onClick={() => this.props.selectedColor(this.props.productColor)}
      >
        &nbsp;
      </ColorBtn>
    );
  }
}

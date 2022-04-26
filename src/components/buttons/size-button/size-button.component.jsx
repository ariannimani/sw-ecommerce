import React, { Component } from "react";
import { SizeBtn } from "./size-button.styles.jsx";

export default class SizeButton extends Component {
  render() {
    return <SizeBtn>{this.props.productSize}</SizeBtn>;
  }
}

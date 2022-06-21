import React, { Component } from "react";
import { BagBtn } from "./bag-button.styles.jsx";
export default class BagButton extends Component {
  render() {
    return <BagBtn {...this.props}>{this.props.btndata}</BagBtn>;
  }
}

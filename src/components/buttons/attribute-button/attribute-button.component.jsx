import React, { Component } from "react";
import { AttributeBtn } from "./attribute-button.styles.jsx";

export default class AttributeButton extends Component {
  render() {
    return <AttributeBtn {...this.props}>{this.props.attribute}</AttributeBtn>;
  }
}

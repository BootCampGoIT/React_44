import React, { Component } from "react";
import { OverLay } from "./ModalStyled";

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("keydown", this.onHandleEscapeClick);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onHandleEscapeClick);
  }

  onHandleEscapeClick = (e) => e.code === "Escape" && this.props.toggle();

  onOverlayClick = (e) => {
    if (e.target === e.currentTarget) this.props.toggle();
  };
  render() {
    return (
      <OverLay onClick={this.onOverlayClick}>{this.props.children}</OverLay>
    );
  }
}

export default Modal;

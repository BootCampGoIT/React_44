import React, { Component, useEffect } from "react";
import { OverLay } from "./ModalStyled";

const Modal = ({ children, toggle }) => {
  const onHandleEscapeClick = (e) => e.code === "Escape" && toggle();

  useEffect(() => {
    window.addEventListener("keydown", onHandleEscapeClick);
    return () => window.removeEventListener("keydown", onHandleEscapeClick);
  });

  const onOverlayClick = (e) => {
    if (e.target === e.currentTarget) toggle();
  };
  return <OverLay onClick={onOverlayClick}>{children}</OverLay>;
};

export default Modal;

// class Modal extends Component {
//   state = {};

//   componentDidMount() {
//     window.addEventListener("keydown", this.onHandleEscapeClick);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("keydown", this.onHandleEscapeClick);
//   }

//   onHandleEscapeClick = (e) => e.code === "Escape" && this.props.toggle();

//   onOverlayClick = (e) => {
//     if (e.target === e.currentTarget) this.props.toggle();
//   };
//   render() {
//     return (
//       <OverLay onClick={this.onOverlayClick}>{this.props.children}</OverLay>
//     );
//   }
// }

// export default Modal;

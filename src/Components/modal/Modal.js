import React from "react";
import { OverLay } from "./ModalStyled";

const Modal = ({ children, toggle }) => {
  const onOverlayClick = (e) => {
    if (e.target === e.currentTarget) toggle();
  };

  return <OverLay onClick={onOverlayClick}>{children}</OverLay>;
};

export default Modal;

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

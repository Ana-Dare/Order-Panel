import React from "react";
import { ToastStyled } from "./Toast.styled";

interface IToast {
  children: React.ReactNode;
}

const Toast = ({ children }: IToast) => {
  return <ToastStyled>{children}</ToastStyled>;
};

export default Toast;

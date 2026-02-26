import React from "react";
import { ColunmStyled } from "./Colunm.styled";

export interface ColunmProps {
  children: React.ReactNode;
  color: string;
  title: string;
}

const Colunm = ({ children, title, color, ...props }: ColunmProps) => {
  return (
    <ColunmStyled title={title} color={color} {...props}>
      {children}
    </ColunmStyled>
  );
};

export default Colunm;

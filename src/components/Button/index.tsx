import React from "react";
import { Button as StyledButton } from "./styles";

interface ButtonProps {
  onClick: (e: any) => void;
  children: any;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children} </StyledButton>;
};

export default Button;

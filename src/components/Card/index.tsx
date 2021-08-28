import React from "react";
import { Container } from "./styles";

export interface CardProps {
  children: any;
  maxWidth?: string;
  width: string;
  height: string;
}

const Card: React.SFC<CardProps> = ({ children, maxWidth, width , height }) => {
  return (
    <Container maxWidth={maxWidth ? maxWidth : ""} width={width} height={height}>
      {children}
    </Container>
  );
};

export default Card;

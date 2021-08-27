import React from "react";
import { Container } from "./styles";

export interface CardProps {
  children: any;
  width: string;
  height: string;
}

const Card: React.SFC<CardProps> = ({ children, width, height }) => {
  return (
    <Container width={width} height={height}>
      {children}
    </Container>
  );
};

export default Card;

import React, { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface TextProps {
  text: string;
  color?: string;
  backgroundColor?: string;
}

const Text: React.FC<TextProps> = ({ text, color, backgroundColor }) => {
  return (
    <Container
      color={color ? color : ""}
      backgroundColor={backgroundColor ? backgroundColor : ""}
    >
      {text}
    </Container>
  );
};

export default Text;

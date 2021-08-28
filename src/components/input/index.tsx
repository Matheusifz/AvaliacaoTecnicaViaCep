  
import React, {
  InputHTMLAttributes, 
} from "react";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  query: string;
  onChange: (event: any) => void; 
}

const Input: React.FC<InputProps> = ({ query, onChange, ...rest }) => {
  return (
    <Container>
      <input  value={query} onChange={onChange}  {...rest}  />
    </Container>
  );
};

export default Input;

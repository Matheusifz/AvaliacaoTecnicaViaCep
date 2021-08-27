import { Input as StyledInput } from "./styles";

interface InputProps {
  query: string;
  onChange: (event: any) => void;
}

const Input: React.FC<InputProps> = ({ query, onChange }) => {
  return <StyledInput  value={query} onChange={onChange}></StyledInput>;
};

export default Input;

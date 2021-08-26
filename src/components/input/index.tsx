interface InputProps {
  query: string;
  onChange: (event: any) => void;
}

const Input: React.FC<InputProps> = ({ query, onChange }) => {
  return <input value={query} onChange={onChange}></input>;
};

export default Input;

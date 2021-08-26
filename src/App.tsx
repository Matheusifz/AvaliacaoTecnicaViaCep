import Input from "./components/input";
import { useState } from "react";

interface Address {
  localidade: string;
  bairro: string;
  uf: string;
  logradouro: string;
  cep: string;
}

function App() {
  const [address, setAddress] = useState<Address | null>();
  const [query, setQuery] = useState("");

  const onChange = (e: any) => {
    setQuery(e.target.value);
  };

  const getAddress = async (e: any) => {
    e.preventDefault();
    const response = await fetch(`https://viacep.com.br/ws/${query}/json/`)
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
    setAddress(response);
  };

  return (
    <div className="App">
      <form className="search-form">
        <Input query={query} onChange={onChange} />
        <button onClick={getAddress} className="search-button">
          Search
        </button>
      </form>
      {!!address && (
        <div>
          <h3>{address.localidade}</h3>
          <h3>{address.logradouro}</h3>
          <h3>{address.bairro}</h3>
          <h3>{address.uf}</h3>
          <h3>{address.cep}</h3>
        </div>
      )}
    </div>
  );
}

export default App;

import { useState } from "react";
import Input from "../../components/Input";

interface Address {
  localidade: string;
  bairro: string;
  uf: string;
  logradouro: string;
  cep: string;
}

const Home: React.FC = () => {
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
    <>
      <form className="search-form">
        <Input query={query} onChange={onChange} />
        <button onClick={getAddress} className="search-button">
          Search
        </button>
      </form>
      {!!address && (
        <div className="card-text">
          <h3 className="localidade">Cidade de {address.localidade}</h3>
          <h3 className="logradouro"> {address.logradouro}</h3>
          <h3 className="bairro">Bairro {address.bairro}</h3>
          <h3 className="uf">Estado {address.uf}</h3>
          <h3 className="cep">CEP {address.cep}</h3>
        </div>
      )}
    </>
  );
};

export default Home;

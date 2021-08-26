import Input from "./components/input";
import { useState } from "react";

function App() {
  const [address, setAddress] = useState({});
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
    </div>
  );
}

export default App;

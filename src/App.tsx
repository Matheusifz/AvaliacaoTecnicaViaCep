import Input from "./components/input";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [adress, setAdress] = useState({}); //Mostrar os dados
  const [search, setSearch] = useState(""); // Procurar os dados
  const [query, setQuery] = useState(""); // Informar os dados que eu quero pegar baseado na pesquisa feita

  useEffect(() => {
    getAdress();
  }, [query]);

  const getAdress = async () => {
    const response = await fetch(`https://viacep.com.br/ws/01001000/json/`)
      .then((response) => response.json())
      .then((response) => console.log(response));
  };



  return (
    <div className="App">
      <form className="search-form">
        <Input />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;

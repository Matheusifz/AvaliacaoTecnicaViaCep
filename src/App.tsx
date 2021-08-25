import Input from "./components/input";

function App() {
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

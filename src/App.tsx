import GlobalStyles from "./styles/global";
import "./styles/global.ts";
import Home from "./pages/Home/index"

function App() {
  return (
    <div className="App">
       <GlobalStyles />
       <Home />
    </div>
  );
}

export default App;

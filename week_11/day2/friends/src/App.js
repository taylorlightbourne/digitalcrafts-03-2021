import "./App.css";
import CardContainer from "./components/CardContainer";
import { data } from "./data/data";


function App() {
  return (
    <div className="App">
      <h1>Friend's List</h1>
      <CardContainer friendData={data} />
    </div>
  );
}

export default App;
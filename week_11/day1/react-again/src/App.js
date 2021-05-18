import "./App.css";
import Class from "./components/Class";
import Range from "./components/Rating";
import Mood from "./components/mood";

function App() {
  return (
    <div className="App">
      <h1>App.js</h1>
      <Class />
      <Range />
      <Mood />
    </div>
  );
}

export default App;
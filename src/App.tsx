import "./App.css";
import Application from "./components/Application/Application";
import Counter from "./components/Counter/Counter";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <div className="App">
      <Application />
      <hr style={{margin: '2rem 0'}} />
      <Skills skills={["HTML", "CSS", "JavaScript"]} />
      <hr style={{margin: '2rem 0'}} />
      <Counter />
    </div>
  );
};

export default App;

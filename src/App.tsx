import "./App.css";
import Application from "./components/Application/Application";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <div className="App">
      <Application />
      <hr style={{margin: '2rem 0'}} />
      <Skills skills={["HTML", "CSS", "JavaScript"]} />
    </div>
  );
};

export default App;

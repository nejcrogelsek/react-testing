import { FC } from "react";
import Application from "../../components/Application/Application";
import Counter from "../../components/Counter/Counter";
import Skills from "../../components/Skills/Skills";

const Home: FC = () => {
  return (
    <div className="App">
      <Application />
      <hr style={{ margin: "2rem 0" }} />
      <Skills skills={["HTML", "CSS", "JavaScript"]} />
      <hr style={{ margin: "2rem 0" }} />
      <Counter />
    </div>
  );
};

export default Home;

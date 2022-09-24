import { FC, useState } from "react";
import Application from "../../components/Application/Application";
import Counter from "../../components/Counter/Counter";
import CounterTwo from "../../components/CounterTwo/CounterTwo";
import Skills from "../../components/Skills/Skills";

const Home: FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Application />
      <hr style={{ margin: "2rem 0" }} />
      <Skills skills={["HTML", "CSS", "JavaScript"]} />
      <hr style={{ margin: "2rem 0" }} />
      <Counter />
      <CounterTwo
        count={count}
        handleIncrement={() => setCount((prev) => prev + 1)}
        handleDecrement={() => setCount((prev) => prev - 1)}
      />
    </div>
  );
};

export default Home;

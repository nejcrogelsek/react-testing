import { FC } from "react";
import { CounterTwoProps } from "./counter.types";

const CounterTwo: FC<CounterTwoProps> = (props: CounterTwoProps) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <p>{props.count}</p>
      {props.handleIncrement && (
        <button onClick={props.handleIncrement}>Increment</button>
      )}
      {props.handleDecrement && (
        <button onClick={props.handleDecrement}>Decrement</button>
      )}
    </div>
  );
};

export default CounterTwo;

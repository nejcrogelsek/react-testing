import { FC } from "react";
import { GreetProps } from "./greet.types";

const GreetWithProps: FC<GreetProps> = ({ name }: GreetProps) => {
  return <div>Hello {name ? name : "Guest"}</div>;
};

export default GreetWithProps;

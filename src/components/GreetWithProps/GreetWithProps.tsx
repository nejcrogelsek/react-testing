import { FC } from "react";

interface Props {
  name?: string;
}

const GreetWithProps: FC<Props> = ({ name }: Props) => {
  return <div>Hello {name && name}</div>;
};

export default GreetWithProps;

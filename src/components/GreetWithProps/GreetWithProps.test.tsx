/*
  Greet should render the text "hello" and if a name is passed into the component
  It should render hello followed by the name.
*/
import { render, screen } from "@testing-library/react";
import Greet from "./GreetWithProps";

test("GreetWithProps renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);

  expect(textElement).toBeInTheDocument();
});

test("GreetWithProps renders with a name", () => {
  render(<Greet name="John" />);
  const textElement = screen.getByText(/hello john/i);

  expect(textElement).toBeInTheDocument();
});

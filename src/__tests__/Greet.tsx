import { render, screen } from "@testing-library/react";
import Greet from "../components/Greet/Greet";

test("Greet component renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);

  expect(textElement).toBeInTheDocument();
});

it("Greet component renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);

  expect(textElement).toBeInTheDocument();
});

// test.only
fit("Greet component renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);

  expect(textElement).toBeInTheDocument();
});

// test.skip
xit("Greet component renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);

  expect(textElement).toBeInTheDocument();
});

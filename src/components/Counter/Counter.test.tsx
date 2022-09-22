import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", { name: /increment/i });
    expect(incrementButton).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking the increment button", async () => {
    user.setup();
    render(<Counter />);

    // Get increment button
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    // Click increment button
    await user.click(incrementButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("renders a count of 1 after clicking the increment button twice", async () => {
    user.setup();
    render(<Counter />);

    // Get increment button
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    // Double click increment button
    await user.dblClick(incrementButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

  test("renders a count of 3 after clicking the increment button three times", async () => {
    user.setup();
    render(<Counter />);

    // Get increment button
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    // Triple click increment button
    await user.tripleClick(incrementButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("3");
  });

  test("renders a count of 10 after clicking the set button", async () => {
    user.setup();
    render(<Counter />);

    // Type amount you want to set
    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);

    // Click set button
    const setButton = screen.getByRole("button", { name: /set/i });
    await user.click(setButton);

    // Count element is now 10
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  test("elements are focused in the right order", async () => {
    user.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: /increment/i });
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: /set/i });

    // Click TAB on keyboard
    await user.tab();
    expect(incrementButton).toHaveFocus();
    // Click TAB on keyboard again
    await user.tab();
    expect(amountInput).toHaveFocus();
    // Click TAB on keyboard again
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});

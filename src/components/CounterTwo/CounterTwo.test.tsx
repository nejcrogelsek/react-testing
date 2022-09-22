import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import CounterTwo from "./CounterTwo";

describe("CounterTwo", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);

    const textElement = screen.getByRole("heading");
    expect(textElement).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();

    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );

    /* One thing to note here;
      Since  buttons are rendered conditionally so ideally we should use queryByRole,
      but the reason getByRole works here it's because in our test during render() we passed the two functions
      via props which ensures functions are present in dom tree beforehand therefore getByRole works here. */
    const incrementButton = screen.getByRole("button", { name: /increment/i });
    const decrementButton = screen.getByRole("button", { name: /decrement/i });

    await user.click(incrementButton);
    await user.click(decrementButton);

    //TODO: FIX THIS
    /* Expected number of calls: 1
       Received number of calls: 0 */
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});

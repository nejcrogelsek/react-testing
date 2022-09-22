import { render, screen } from "@testing-library/react";
import AppProviders from "../../providers/app-providers";
import MuiMode from "./mui-mode";

describe("MuiMode", () => {
  test("renders text correctly", () => {
    render(<MuiMode />, { wrapper: AppProviders });

    const headingElement = screen.getByRole("heading", {
      name: /mode/i,
      exact: false,
    });
    expect(headingElement).toHaveTextContent("dark mode");
  });
});

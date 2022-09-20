import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

/* Jest is a test runner than can:
 - find the tests 
 - run it
 - provide user friendly message if test is PASS or FAIL

  Run jest: npm run test

  test(name, fn, timeout)
    - name: test name used to indentify the test
    - fn: function that contains the expectations to test
    - timeout: is optional for specifying how long to wait before aborting the test. The default timeout value is 5 seconds.  
    */

// skip - skips the test
// only - jest picks only that test to run
test.skip("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

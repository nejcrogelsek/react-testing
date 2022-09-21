# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About tests

Jest is a test runner than can: - find the tests - run it - provide user friendly message if test is PASS or FAIL

Run jest: `npm run test`

test(name, fn, timeout)
    - name: test name used to indentify the test
    - fn: function that contains the expectations to test
    - timeout: is optional for specifying how long to wait before aborting the test. The default timeout value is 5 seconds.

### Group tests

describe(name, fn)
    - name: group name used to indentify the group of tests
    - fn: function that contains the expectations to test

test.skip / describe.skip - skips the test or group of tests
test.only / describe.only - jest picks only that test / group to run

### Filename conventions

Files with .test.js or .test.tsx suffix.
Files with .spec.js or .spec.tsx suffix.
Files with .js or .tsx suffix in **tests** folders.

Recommendation is to always put your tests next to the code they are testing so that relative imports are shorter.

We can use `it` instead of `test`.
We can use `fit` instead of `test.only`.
We can use `xit` instead of `test.skip`.

### Assertions

When writing tests, we often need to check that values meet certain conditions.
Assertions decide if a test passes or fails.

Find more about using matchers [here](https://jestjs.io/docs/using-matchers) or in [github repo](https://github.com/testing-library/jest-dom).

## What to test
Guidelines:
Test - if component renders
Test - if component renders with props
Test - if component renders in different states (auth / no auth)
Test - if component reacts to events (buttons, font controls)

### What not to test
Implementation details - test behaviour not how behaviour is implemented
Third party code - example: material ui
Code that is not important from a user point of view

## RTL Queries
Queries are methods that Testing Library provides to find elements on the page.
Every test we write generally involves the folowing basic steps:
1. Render the component
2. Find an element rendered by the component
3. Assert against the element found in step 2 which will pass or fail the test

To render the component we use `render` method from RTL.

For assertion, we use expect passing in the value and combine it with a matcher function from jest or jest-dom.

To find single element on the page, we have:
    - getBy..suffix
    - queryBy..suffix
    - findBy..suffix
To find multiple elements on the page, we have:
    - getAllBy..suffix
    - queryAllBy..suffix
    - findAllBy..suffix

The suffix can be one of `Role`, `LabelText`, `PlaceHolderText`, `Text`, `DisplayValue`, `AltText`, `Title` and finally `TestId`.

### Options
#### getByRole
Link to all roles usage: https://www.w3.org/TR/html-aria/#docconformance
`getByRole Options`:
- name: The accessible name is for simple cases equal to:
    1. the label of a form element
    2. the text content of a button
    3. the value of the aria-label attribute
- level: Example: for headings
- hidden
- selected
- checked
- pressed

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:coverage`

`test:coverage in package.json`

```bash
$ "test:coverage": "npm run test -- --coverage --watchAll --collectCoverageFrom='src/components/**/*.{ts,tsx}' --collectCoverageFrom='!src/components/**/*.{types,stories,constants,test,spec}.{ts,tsx}'"
```

```bash
$ yarn run test:coverage
```

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

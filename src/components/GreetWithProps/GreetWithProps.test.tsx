/*
  Greet should render the text "hello" and if a name is passed into the component
  It should render hello followed by the name.
*/

import { render, screen } from '@testing-library/react'
import Greet from './GreetWithProps'

/* Group tests
  describe(name, fn)
    - name: group name used to indentify the group of tests
    - fn: function that contains the expectations to test
  */

describe('GreetWithProps', () => {
  test('renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText(/hello/i)

    expect(textElement).toBeInTheDocument()
  })

  describe('Nested', () => {
    test('renders with a name', () => {
      render(<Greet name="John" />)
      const textElement = screen.getByText(/hello john/i)

      expect(textElement).toBeInTheDocument()
    })
  })
})

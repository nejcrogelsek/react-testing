import { render, screen } from '@testing-library/react'
import Greet from '../components/Greet/Greet'

test('Greet component renders correctly', () => {
  render(<Greet />)
  const textElement = screen.getByText(/hello/i)

  expect(textElement).toBeInTheDocument()
})

it('component renders correctly', () => {
  render(<Greet />)
  const textElement = screen.getByText(/hello/i)

  expect(textElement).toBeInTheDocument()
})

// test.only
fit('test.only Greet component renders correctly', () => {
  render(<Greet />)
  const textElement = screen.getByText(/hello/i)

  expect(textElement).toBeInTheDocument()
})

// test.skip
xit('test.skip Greet component renders correctly', () => {
  render(<Greet />)
  const textElement = screen.getByText(/hello/i)

  expect(textElement).toBeInTheDocument()
})

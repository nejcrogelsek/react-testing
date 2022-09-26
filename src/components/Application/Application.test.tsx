import { render, screen } from '@testing-library/react'
import Application from './Application'

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />)
    const pageHeading = screen.getByRole('heading', { level: 1 })
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole('heading', { level: 2 })
    expect(sectionHeading).toBeInTheDocument()

    // exact TextMatch
    const paragraphElement = screen.getByText('All fields are mandatory')
    expect(paragraphElement).toBeInTheDocument()

    // not exact TextMatch
    const paragraphElement2 = screen.getByText('mandatory', { exact: false })
    expect(paragraphElement2).toBeInTheDocument()

    // regex TextMatch
    const paragraphElement3 = screen.getByText(/all fields are mandatory/i)
    expect(paragraphElement3).toBeInTheDocument()

    // custom function TextMatch
    const paragraphElement4 = screen.getByText((content) =>
      content.startsWith('All')
    )
    expect(paragraphElement4).toBeInTheDocument()

    const closeElement = screen.getByTitle('close')
    expect(closeElement).toBeInTheDocument()

    const imageElement = screen.getByAltText(/a person with a laptop/i)
    expect(imageElement).toBeInTheDocument()

    const customElement = screen.getByTestId('custom-element')
    expect(customElement).toBeInTheDocument()

    // getByRole - should be preference
    const nameElement = screen.getByRole('textbox', { name: 'Name' })
    expect(nameElement).toBeInTheDocument()

    // getByLabelText
    const nameElement2 = screen.getByLabelText('Name', { selector: 'input' })
    expect(nameElement2).toBeInTheDocument()

    // getByPlaceholderText
    const nameElement3 = screen.getByPlaceholderText('Fullname')
    expect(nameElement3).toBeInTheDocument()

    // getByDisplayValue
    const nameElement4 = screen.getByDisplayValue('John')
    expect(nameElement4).toBeInTheDocument()

    const bioElement = screen.getByRole('textbox', { name: 'Bio' })
    expect(bioElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument()

    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()

    // getByLabelText
    const termsElement2 = screen.getByLabelText(
      'I agree to the terms and conditions'
    )
    expect(termsElement2).toBeInTheDocument()

    const submitButtonElement = screen.getByRole('button')
    expect(submitButtonElement).toBeInTheDocument()

    //expect(submitButtonElement).not.toBeEnabled();
    expect(submitButtonElement).toBeDisabled()
  })
})

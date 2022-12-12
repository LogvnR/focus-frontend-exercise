import Search from './Search'
import { render, fireEvent } from '@testing-library/react'

describe('Search', () => {
    const mockFn = jest.fn()
    it('renders', () => {
        const { getByRole } = render(<Search stateSearch={mockFn} />)

        const input = getByRole('textbox')
        const button = getByRole('button')

        expect(input).toBeInTheDocument()
        expect(button).toBeInTheDocument()
    })

    it('clears input when button is clicked', () => {
        const { getByRole } = render(<Search stateSearch={mockFn} />)

        const input = getByRole('textbox')
        const button = getByRole('button')

        fireEvent.change(input, { target: { value: 'Arizona' } })

        expect(input).toHaveValue('Arizona')

        fireEvent.click(button)

        expect(input).toHaveValue('')
    })
})

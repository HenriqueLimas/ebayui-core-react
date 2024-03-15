import React from 'react'
import { render, within } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './index.stories'

const { Default, Range, ControlledValues } = composeStories(stories)

jest.mock('makeup-next-id', () => (el) => el.setAttribute('id', 'testid'))

describe('ebay-date-textbox rendering', () => {
    it('renders default story correctly', () => {
        const { container } = render(<Default/>)

        const dateTextbox = container.querySelector('.date-textbox')
        expect(dateTextbox).toHaveAttribute('id', 'testid')

        const textbox = dateTextbox.querySelector('.textbox')
        expect(textbox).toHaveClass('ebay-date-textbox--main textbox--icon-end')

        const input = within(dateTextbox).getByRole('textbox')
        expect(input).toHaveAttribute('type', 'text')
        expect(input).toHaveAttribute('placeholder', 'YYYY-MM-DD')
        expect(input).toHaveClass('textbox__control')
        expect(input).toHaveValue('')

        const button = within(dateTextbox).getByRole('button')
        expect(button).toHaveClass('icon-btn icon-btn--transparent')
        expect(button).toHaveAttribute('aria-label', 'open calendar')
        expect(button).toHaveAttribute('type', 'button')
        expect(button).toHaveAttribute('aria-expanded', 'false')
        expect(button).toHaveAttribute('aria-controls', 'testid-content')
        expect(button.querySelector('svg')).toHaveClass('icon icon--calendar-24')

        const popover = dateTextbox.querySelector('.date-textbox__popover')
        expect(popover).toHaveAttribute('hidden', '')
        expect(popover).toHaveAttribute('id', 'testid-content')

        const calendar = popover.querySelector('.calendar')
        expect(calendar).toBeInTheDocument()
    })

    it('renders range story correctly', () => {
        const { container } = render(<Range/>)

        const dateTextbox = container.querySelector('.date-textbox')
        expect(dateTextbox).toHaveAttribute('id', 'testid')

        const [textboxStart, textboxEnd] = dateTextbox.querySelectorAll('.textbox')
        expect(textboxEnd).toHaveClass('ebay-date-textbox--main textbox--icon-end')

        const inputStart = within(textboxStart).getByRole('textbox')
        expect(inputStart).toHaveAttribute('type', 'text')
        expect(inputStart).toHaveAttribute('placeholder', 'YYYY-MM-DD')
        expect(inputStart).toHaveClass('textbox__control')
        expect(inputStart).toHaveValue('')

        const inputEnd = within(textboxStart).getByRole('textbox')
        expect(inputEnd).toHaveAttribute('type', 'text')
        expect(inputEnd).toHaveAttribute('placeholder', 'YYYY-MM-DD')
        expect(inputEnd).toHaveClass('textbox__control')
        expect(inputEnd).toHaveValue('')

        const button = within(textboxEnd).getByRole('button')
        expect(button).toHaveClass('icon-btn icon-btn--transparent')
        expect(button).toHaveAttribute('aria-label', 'open calendar')
        expect(button).toHaveAttribute('type', 'button')
        expect(button).toHaveAttribute('aria-expanded', 'false')
        expect(button).toHaveAttribute('aria-controls', 'testid-content')
        expect(button.querySelector('svg')).toHaveClass('icon icon--calendar-24')

        const popover = dateTextbox.querySelector('.date-textbox__popover')
        expect(popover).toHaveAttribute('hidden', '')
        expect(popover).toHaveAttribute('id', 'testid-content')

        const calendar = popover.querySelector('.calendar')
        expect(calendar).toBeInTheDocument()
    })

    it('renders controlled values story correctly', () => {
        const { container } = render(<ControlledValues value="2024-01-03" />)

        const dateTextbox = container.querySelector('.date-textbox')
        expect(dateTextbox).toHaveAttribute('id', 'testid')

        const textbox = dateTextbox.querySelector('.textbox')
        expect(textbox).toHaveClass('ebay-date-textbox--main textbox--icon-end')

        const input = within(dateTextbox).getByRole('textbox')
        expect(input).toHaveAttribute('type', 'text')
        expect(input).toHaveAttribute('placeholder', 'YYYY-MM-DD')
        expect(input).toHaveClass('textbox__control')
        expect(input).toHaveValue('2024-01-03')
    })
})

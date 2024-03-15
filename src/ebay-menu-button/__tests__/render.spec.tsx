import React from 'react'
import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './index.stories'

const {
    Default,
    Expanded,
    Disabled,
    WithIcon,
    WithoutToggleIcon,
    Variants,
    Priorities,
    Borderless,
    WithCustomLabel,
    WithSeparator,
    SingleSelectMenuButtonItemChecked,
    SingleSelectMenuButtonMenuChecked,
    MultiSelectMenuButton,
    FixedWidth,
    ReverseMenuGrowsToTheLeft
} = composeStories(stories)

describe('EbayMenuButton rendering', () => {
    describe('Default', () => {
        it('should render correctly', () => {
            render(<Default/>)
            const [firstButton] = screen.getAllByRole('button')

            expect(firstButton).toHaveClass('btn menu-button__button btn--secondary')
            const svg = firstButton.querySelector('svg')
            expect(svg).toHaveClass('icon icon--chevron-down-12')
            expect(svg).toHaveAttribute('aria-hidden', 'true')
            expect(svg).toHaveAttribute('focusable', 'false')
        })
    })

    describe('Expanded', () => {
        it('should render correctly', () => {
            render(<Expanded/>)
            const [firstButton] = screen.getAllByRole('button')

            expect(firstButton).toHaveClass('btn menu-button__button btn--secondary')
            expect(firstButton).toHaveAttribute('aria-expanded', 'true')
            const [item] = screen.getAllByRole('menuitem')
            expect(item.textContent).toEqual('item 1 that has very long text')
        })
    })

    describe('Disabled', () => {
        it('should render correctly', () => {
            render(<Disabled/>)
            const [firstButton] = screen.getAllByRole('button')

            expect(firstButton).toHaveClass('btn menu-button__button btn--secondary')
            expect(firstButton).toHaveAttribute('disabled', '')
            const svg = firstButton.querySelector('svg')
            expect(svg).toHaveClass('icon icon--chevron-down-12')
            expect(svg).toHaveAttribute('aria-hidden', 'true')
            expect(svg).toHaveAttribute('focusable', 'false')
        })
    })

    describe('WithIcon', () => {
        it('should render correctly', () => {
            render(<WithIcon/>)
            const [firstButton] = screen.getAllByRole('button')

            expect(firstButton).toHaveClass('btn menu-button__button btn--secondary')
            const [iconSvg, chevronSvg] = firstButton.querySelectorAll('svg')
            expect(iconSvg).toHaveClass('icon icon--settings-16')
            expect(iconSvg).toHaveAttribute('aria-hidden', 'true')
            expect(iconSvg).toHaveAttribute('focusable', 'false')
            expect(chevronSvg).toHaveClass('icon icon--chevron-down-12')
            expect(chevronSvg).toHaveAttribute('aria-hidden', 'true')
            expect(chevronSvg).toHaveAttribute('focusable', 'false')
        })
    })

    describe('WithoutToggleIcon', () => {
        it('should render correctly', () => {
            render(<WithoutToggleIcon/>)
            const [firstButton] = screen.getAllByRole('button')

            expect(firstButton).toHaveClass('btn menu-button__button btn--secondary')
            const svg = firstButton.querySelector('svg')
            expect(svg).toBeNull()
        })
    })

    describe('Variants', () => {
        it('should render correctly', () => {
            render(<Variants/>)
            const [firstButton, secondButton, thirdButton] = screen.getAllByRole('button')

            expect(firstButton).toHaveClass('btn menu-button__button btn--secondary')
            const firstSvg = firstButton.querySelector('svg')
            expect(firstSvg).toHaveClass('icon icon--chevron-down-12')
            expect(firstSvg).toHaveAttribute('aria-hidden', 'true')
            expect(firstSvg).toHaveAttribute('focusable', 'false')

            expect(secondButton).toHaveClass('btn menu-button__button btn--form')
            const secondSvg = secondButton.querySelector('svg')
            expect(secondSvg).toHaveClass('icon icon--chevron-down-12')
            expect(secondSvg).toHaveAttribute('aria-hidden', 'true')
            expect(secondSvg).toHaveAttribute('focusable', 'false')

            expect(thirdButton).toHaveClass('menu-button__button icon-btn')
            const thirdSvg = thirdButton.querySelector('svg')
            expect(thirdSvg).toHaveClass('icon icon--overflow-vertical-16')
            expect(thirdSvg).toHaveAttribute('aria-hidden', 'true')
            expect(thirdSvg).toHaveAttribute('focusable', 'false')
        })
    })

    describe('Priorities', () => {
        it('should render correctly', () => {
            render(<Priorities/>)
            const [firstButton, secondButton] = screen.getAllByRole('button')

            expect(firstButton).toHaveClass('btn menu-button__button btn--primary')
            const firstSvg = firstButton.querySelector('svg')
            expect(firstSvg).toHaveClass('icon icon--chevron-down-12')
            expect(firstSvg).toHaveAttribute('aria-hidden', 'true')
            expect(firstSvg).toHaveAttribute('focusable', 'false')

            expect(secondButton).toHaveClass('btn menu-button__button btn--tertiary')
            const secondSvg = secondButton.querySelector('svg')
            expect(secondSvg).toHaveClass('icon icon--chevron-down-12')
            expect(secondSvg).toHaveAttribute('aria-hidden', 'true')
            expect(secondSvg).toHaveAttribute('focusable', 'false')
        })
    })

    describe('Borderless', () => {
        it('should render correctly', () => {
            render(<Borderless/>)
            const [firstButton] = screen.getAllByRole('button')
            expect(firstButton).toHaveClass('btn menu-button__button btn--borderless')

        })
    })

    describe('WithCustomLabel', () => {
        it('should render correctly', () => {
            render(<WithCustomLabel/>)
            const [firstButton] = screen.getAllByRole('button')
            expect(firstButton).toHaveClass('btn menu-button__button btn--secondary')


            const label = firstButton.querySelector('.btn__text')
            expect(label).toHaveTextContent('Fun with flags!')
        })
    })

    describe('WithSeparator', () => {
        it('should render correctly', () => {
            render(<WithSeparator expanded/>)
            const [firstButton] = screen.getAllByRole('button')
            expect(firstButton).toHaveClass('btn menu-button__button btn--secondary')

            const separators = screen.getAllByRole('separator')
            expect(separators.length).toEqual(2)
        })
    })

    describe('SingleSelectMenuButtonItemChecked', () => {
        it('should render correctly', () => {
            render(<SingleSelectMenuButtonItemChecked expanded/>)
            const [firstButton] = screen.getAllByRole('button')
            expect(firstButton).toHaveClass('btn menu-button__button btn--secondary')

            const [firstItem, secondItem, thirdItem] = screen.getAllByRole('menuitemradio')
            expect(firstItem).toHaveAttribute('aria-checked', 'false')
            expect(secondItem).toHaveAttribute('aria-checked', 'true')
            expect(thirdItem).toHaveAttribute('aria-checked', 'false')
        })
    })

    describe('SingleSelectMenuButtonMenuChecked', () => {
        it('should render correctly', () => {
            render(<SingleSelectMenuButtonMenuChecked expanded/>)
            const [firstButton] = screen.getAllByRole('button')
            expect(firstButton).toHaveClass('btn menu-button__button btn--secondary')

            const [firstItem, secondItem, thirdItem] = screen.getAllByRole('menuitemradio')
            expect(firstItem).toHaveAttribute('aria-checked', 'false')
            expect(secondItem).toHaveAttribute('aria-checked', 'true')
            expect(thirdItem).toHaveAttribute('aria-checked', 'false')
        })
    })

    describe('MultiSelectMenuButton', () => {
        it('should render correctly', () => {
            render(<MultiSelectMenuButton expanded/>)
            const [firstButton] = screen.getAllByRole('button')
            expect(firstButton).toHaveClass('btn menu-button__button btn--secondary')

            const [firstItem, secondItem, thirdItem] = screen.getAllByRole('menuitemcheckbox')
            expect(firstItem).toHaveAttribute('aria-checked', 'true')
            expect(secondItem).toHaveAttribute('aria-checked', 'false')
            expect(thirdItem).toHaveAttribute('aria-checked', 'true')
        })
    })

    describe('FixedWidth', () => {
        it('should render correctly', () => {
            render(<FixedWidth expanded/>)
            const menu = screen.getByRole('menu')
            expect(menu.parentElement).toHaveClass('menu-button__menu menu-button__menu--fix-width menu')
        })
    })

    describe('ReverseMenuGrowsToTheLeft', () => {
        it('should render correctly', () => {
            render(<ReverseMenuGrowsToTheLeft expanded/>)
            const menu = screen.getByRole('menu')
            expect(menu.parentElement).toHaveClass('menu-button__menu menu-button__menu--reverse')
        })
    })
})

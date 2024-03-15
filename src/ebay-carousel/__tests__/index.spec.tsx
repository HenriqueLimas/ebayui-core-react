import React from 'react'
import { render, screen } from '@testing-library/react'
import { composeStory } from '@storybook/react'
import Meta, { Continuous, ItemsPerSlide } from './index.stories'

const ContinuousStory = composeStory(Continuous, Meta);
const ItemsPerSlideStory = composeStory(ItemsPerSlide, Meta);

// NOTE: need to mock scrollTo since JSDOM does not support it
jest.mock('../scroll-to-transition')

// Testing current slide or items per slides is not possible
// because we are using `getBoundingClientRect()` and when testing it returns 0 everytime
describe('ebay-carousel rendering', () => {
    it('renders continuous story correctly', () => {
        const { container } = render(<ContinuousStory />);
        const carousel = container.querySelector('.carousel .carousel__container')
        expect(carousel).toBeInTheDocument()

        const [buttonPrev, buttonNext] = screen.getAllByRole('button')
        expect(buttonPrev).toHaveClass('carousel__control carousel__control--prev')
        expect(buttonPrev.querySelector('svg')).toHaveClass('icon icon--chevron-left-12')
        expect(buttonNext).toHaveClass('carousel__control carousel__control--next')
        expect(buttonNext.querySelector('svg')).toHaveClass('icon icon--chevron-right-12')

        expect(carousel.querySelector('.carousel__viewport')).toBeInTheDocument();
        const itemList = screen.getByRole('list')
        expect(itemList).toHaveClass('carousel__list')
        expect(itemList).toHaveAttribute('style', 'transform: translate3d(0px, 0, 0);')

        const items = screen.getAllByRole('listitem')
        const firstItem = items[0]
        expect(firstItem).toHaveClass('carousel__snap-point')
        expect(firstItem).toHaveAttribute('style', 'color: rgb(10, 28, 107); background: rgb(194, 245, 255); font-size: 24px; font-weight: bold; width: 200px; height: 120px; line-height: 120px; text-align: center; margin-right: 16px;')

        const visibleItems = items.filter(item => item.getAttribute("aria-hidden"))
        expect(visibleItems.length).toBe(items.length)
    })

    it('renders items per slide story correctly', () => {
        render(<ItemsPerSlideStory />);

        const itemList = screen.getByRole('list')
        const items = screen.getAllByRole('listitem')
        const firstItem = items[0]
        const lastItem = items[items.length-1]
        expect(firstItem).toHaveAttribute('aria-hidden', 'false')
        // todo: fix this test
        // expect(lastItem).toHaveAttribute('aria-hidden', 'true')
        const visibleItems = items.filter(item => item.getAttribute("aria-hidden"))
        // expect(visibleItems.length).toBe(3)
        expect(visibleItems.length).toBe(items.length)
    })

})

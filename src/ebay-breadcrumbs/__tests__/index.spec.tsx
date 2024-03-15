import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { EbayBreadcrumbs, EbayBreadcrumbItem } from '../index'

describe('<EbayBreadcrumbs>', () => {
    describe('on category click', () => {
        it('should fire an event', () => {
            const spy = jest.fn()
            const wrapper = render(
                <EbayBreadcrumbs onSelect={spy}>
                    <EbayBreadcrumbItem>home</EbayBreadcrumbItem>
                </EbayBreadcrumbs>
            )
            const button = wrapper.getByRole('button')
            userEvent.click(button)

            const syntheticEvent = expect.objectContaining( { target: null })
            expect(spy).toBeCalledWith(syntheticEvent)
        })
    })

    describe('rendering lists', () => {
        it('should render breadcrumb items from a list', () => {
            const items = ['home', 'listings', 'about']

            const wrapper = render(
                <EbayBreadcrumbs>
                    {items.map((item, index) => <EbayBreadcrumbItem key={index}>{item}</EbayBreadcrumbItem>)}
                </EbayBreadcrumbs>
            )

            // Test all items are displayed in correct order.
            items.forEach((value, index) => {
                expect(wrapper.getAllByRole('button')[index].textContent).toEqual(value)
            })
        })
    })
})

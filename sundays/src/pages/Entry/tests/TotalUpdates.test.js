import {render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Options } from '../Options'
import { OrderDetailsProvider } from '../../../contexts/OrderDetails'

test('update scoop subtotal when scoops change', async () => {
    const user = userEvent.setup()
    render(<Options optionType='scoops'/>, {wrapper: OrderDetailsProvider})
    const scoopSubTotal = screen.getByText('Scoops total: $', {
        exact: false
    })
    expect(scoopSubTotal).toHaveTextContent('0.00')

    const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla'})
    await user.clear(vanillaInput)
    await user.type(vanillaInput, '1')
    expect(scoopSubTotal).toHaveTextContent('1.00')

    const chocolateInput = await screen.findByRole('spinbutton', { name: 'Chocolate'})
    await user.clear(chocolateInput)
    await user.type(chocolateInput, '1')
    expect(scoopSubTotal).toHaveTextContent('6.00')
})
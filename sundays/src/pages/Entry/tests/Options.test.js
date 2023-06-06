import { render, screen } from '@testing-library/react';

import { Options } from '../Options';

test('displays images', async()=>{
    render(<Options optionType="scoops" />)

    //find images
    const scoopsImages = await screen.findAllByRole('img', {name: /scoop$/i})
    expect(scoopsImages).toHaveLength(2)

    // confirm alt text of img
    const altText = scoopsImages.map(el => el.alt)
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop'])
})
test('displays images topping', async()=>{
    render(<Options optionType="toppings" />)

    //find images
    const toppingsImages = await screen.findAllByRole('img', {name: /topping$/i})
    expect(toppingsImages).toHaveLength(3)

    // confirm alt text of img
    const altText = toppingsImages.map(el => el.alt)
    expect(altText).toEqual(['Cherries topping', 'M&Ms topping', 'Hot fudge topping'])
})
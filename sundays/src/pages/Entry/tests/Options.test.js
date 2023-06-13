import { render, screen } from '../../../test-utils/testing-library-utils';

import { Options } from '../Options';

test('displays images topping', async()=>{
    render(<Options optionType="toppings" />)

    //find images
    const toppingsImages = await screen.findAllByRole('img', {name: /topping$/i})
    expect(toppingsImages).toHaveLength(3)

    // confirm alt text of img
    const altText = toppingsImages.map(el => el.alt)
    expect(altText).toEqual(['Cherries topping', 'M&Ms topping', 'Hot fudge topping'])
})
test('displays images scoops', async()=>{
    render(<Options optionType="scoops" />)

    //find images
    const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
    expect(scoopImages).toHaveLength(2);

    // confirm alt text of img
    const altText = scoopImages.map(el => el.alt)
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop'])
})
import { render, screen } from '@testing-library/react';

import { Options } from '../Options';

test('displays images', async()=>{
    render(<Options optionType="scoops" />)

    //find images
    const scoopsImages = await screen.findAllByRole('img', {name: /scoop$/i})
    expect(scoopsImages).toHaveLength(2)

    // confirm alt text of img
    const altText = scoopsImages.map(el => el.alt)
    expect(altText).toEqual(['chocolate', 'vanilla'])
})
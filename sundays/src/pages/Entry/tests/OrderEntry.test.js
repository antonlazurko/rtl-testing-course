import { render, screen, waitFor } from '@testing-library/react';
import { rest } from "msw";

import {server} from '../../../mocks/server'


import { OrderEntry } from '../OrderEntry';

test.only('handles error for scoops and toppings routes', async() => {
    server.resetHandlers(
        rest.get("http://localhost:3030/scoops", (req, res, ctx) => {
            return res(
                ctx.status(500)
                )
        }),
        rest.get("http://localhost:3030/toppings", (req, res, ctx) => {
            return res(
                ctx.status(500)
                )
        })
    )
    render(<OrderEntry/>)
    await waitFor(async () => {
        const alert = await screen.findAllByRole('alert')
        expect(alert).toHaveLength(2)}
    )
})
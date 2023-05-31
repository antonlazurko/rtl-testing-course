import { render, screen, fireEvent } from '@testing-library/react';
import {SummaryForm} from '../Summary/SummaryForm';
import userEvent from '@testing-library/user-event'

describe('SummaryForm', () => {
    test('init condition', () => {
        render(<SummaryForm />);
        const checkbox = screen.getByRole('checkbox', {
            name: /terms and conditions/i
        });
        expect(checkbox).not.toBeChecked();
        const confirmBtn = screen.getByRole('button', {
            name: /confirm/i
        })
        expect(confirmBtn).toBeDisabled()
    });
    test('checkbox enebles/disable btn', async () => {
        const user = userEvent.setup()
        render(<SummaryForm />);
        const checkbox = screen.getByRole('checkbox', {
            name: /terms and conditions/i
        });
        const confirmBtn = screen.getByRole('button', {
                name: /confirm/i
        })
        await user.click(checkbox)
        expect(confirmBtn).toBeEnabled()
        await user.click(checkbox)
        expect(confirmBtn).toBeDisabled()
        });
    test('popover respond to hover', async () => {
        const user = userEvent.setup()
        render(<SummaryForm />);
        const nullPopover = screen.queryByText(/no ice cream/i)
        expect(nullPopover).not.toBeInTheDocument()
        const termsAndConditions = screen.getByText(/terms and conditions/i)
        await user.hover(termsAndConditions)
        const popover = screen.getByText(/no ice cream/i)
        expect(popover).toBeInTheDocument()
        await user.unhover(termsAndConditions)
        expect(popover).not.toBeInTheDocument()
    })
})

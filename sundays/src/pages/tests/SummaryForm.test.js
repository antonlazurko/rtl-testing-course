import { render, screen, fireEvent } from '@testing-library/react';
import {SummaryForm} from '../Summary/SummaryForm';

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
      test('checkbox enebles/disable btn', () => {
          render(<SummaryForm />);
          const checkbox = screen.getByRole('checkbox', {
              name: /terms and conditions/i
          });
          const confirmBtn = screen.getByRole('button', {
            name: /confirm/i
          })
          fireEvent.click(checkbox)
          expect(checkbox).toBeChecked();
          expect(confirmBtn).toBeEnabled()
        });
})

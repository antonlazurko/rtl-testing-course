import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('init color', () => {
  render(<App />);
  const button = screen.getByRole('button', {name: /to blue/i})
  expect(button).toHaveStyle('background-color: red')
});

test('button turns blue when clicked', () => {
  render(<App />);
  const button = screen.getByRole('button', {name: /to blue/i})
  fireEvent.click(button)
  expect(button).toHaveStyle('background-color: blue')
  expect(button.textContent).toBe('to red')
});

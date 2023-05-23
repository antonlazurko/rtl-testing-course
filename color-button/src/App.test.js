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

test('init condition', () => {
  render(<App />);
  const button = screen.getByRole('button', {name: /to blue/i})
  expect(button).toBeEnabled()
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
});
test('button disabled end enable after checkbox checked', () => {
  render(<App />);
  const button = screen.getByRole('button', {name: /to blue/i})
  const checkbox = screen.getByRole('checkbox')
  fireEvent.click(checkbox)
  expect(button).toBeDisabled()
  fireEvent.click(checkbox)
  expect(button).toBeEnabled()
});
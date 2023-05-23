import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';


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
  const button = screen.getByRole('button')
  const checkbox = screen.getByRole('checkbox', {name: 'disable btn'})
  fireEvent.click(checkbox)
  expect(button).toBeDisabled()
  expect(button).toHaveStyle('background-color: grey')
  fireEvent.click(checkbox)
  expect(button).toBeEnabled()
  expect(button).toHaveStyle('background-color: red')
});

describe('spaces before camel-case capital letters', () => {
  test('works for inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  })
  test('works for one inner capital letters', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })
  test('works for one multuply capital letters', () => {
    expect(replaceCamelWithSpaces('MediumViolateRed')).toBe('Medium Violate Red')
  })
})
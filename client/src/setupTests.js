// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import LandingPage from './modules/LandingPage'

test('renders react link', () => {
  render(<LandingPage />)
  const header = screen.getByText(/iStore Search-A-Nator/i)
  expect(header).toBeInTheDocument();
})

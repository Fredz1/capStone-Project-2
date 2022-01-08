import { render, screen } from '@testing-library/react'
import LandingPage from './modules/LandingPage'
import ItemCard from './modules/ItemCard'

test('renders react link', () => {
  render(<LandingPage />)
  const header = screen.getByText(/iStore Search-A-Nator/i)
  expect(header).toBeInTheDocument();
})
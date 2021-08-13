import { render, screen } from '@testing-library/react';
import { MainPostSection } from "./MainPostSection"

test('renders main section header', () => {
  render(<MainPostSection />)

  const mainPostSection = screen.getByTestId('main-post-section')
  
  expect(mainPostSection).toBeInTheDocument()
});
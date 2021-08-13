import { render, screen } from '@testing-library/react';
import { MainPostSection } from "./MainPostSection"

test('renders learn react link', () => {
  render(<MainPostSection />)
  const mainCommentElement = screen.getByTestId('main-post-component')
  
  expect(mainCommentElement).toBeInTheDocument()
});
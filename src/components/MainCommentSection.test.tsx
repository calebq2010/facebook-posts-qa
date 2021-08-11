import { render, screen } from '@testing-library/react';
import { MainCommentSection } from "./MainCommentSection"

test('renders learn react link', () => {
  render(<MainCommentSection />)
  const mainCommentElement = screen.getByTestId('main-comment-component')
  
  expect(mainCommentElement).toBeInTheDocument()
});
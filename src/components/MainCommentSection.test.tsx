import { render, screen } from '@testing-library/react';
import { MainCommentSection } from "./MainCommentSection"

test('renders learn react link', () => {
  render(<MainCommentSection />)
  const commentElement = screen.getByText('This is a Comment Component')
  
  expect(commentElement).toBeInTheDocument()
});
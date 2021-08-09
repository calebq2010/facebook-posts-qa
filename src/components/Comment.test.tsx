import { render, screen } from '@testing-library/react';
import { Comment } from "./Comment"

test('renders learn react link', () => {
  render(<Comment />)
  const mainSectionText = screen.getByText('This is a Comment Component')
  
  expect(mainSectionText).toBeInTheDocument()
});
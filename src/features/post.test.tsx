import { render, screen } from '@testing-library/react';
import { Post } from "../features/posts/post"

const post = "This is what is on my mind and a post value"

test('renders post list', () => {
  render(<Post post={post} />)

  const postItem = screen.getByTestId('post')
  
  expect(postItem).toBeInTheDocument()
});

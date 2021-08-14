import { render, screen } from '@testing-library/react';
import { ListOfPosts } from "../posts/ListOfPosts"

const posts = ["This is what is on my mind and a post value"]

test('renders post list', () => {
  render(<ListOfPosts posts={posts} />)

  const postList = screen.getByTestId('post-list')
  
  expect(postList).toBeInTheDocument()
});


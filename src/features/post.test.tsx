import { render, screen } from '@testing-library/react';
import { Post } from "../features/posts/post"

const post = "This is what is on my mind and a post value"

test('renders post list', () => {
  render(<Post post={post} />)

  const postItem = screen.getByTestId('post')
  
  expect(postItem).toBeInTheDocument()
});

test('renders users display information', () => {
  render(<Post post={post} />)

  const userDisplayInfo = screen.getByTestId('user-display-info')
  
  expect(userDisplayInfo).toBeInTheDocument()
});

test('renders profile picture', () => {
  render(<Post post={post} />)

  const profilePicture = screen.getByTestId('post-profile-picture')
  
  expect(profilePicture).toBeInTheDocument()
});

test('renders profile section', () => {
  render(<Post post={post} />)

  const profileSection = screen.getByTestId('profile-area')
  
  expect(profileSection).toBeInTheDocument()
});

test('renders profile user name', () => {
  render(<Post post={post} />)

  const profileUserName = screen.getByTestId('user-name')
  
  expect(profileUserName).toBeInTheDocument()
  expect(profileUserName).toHaveTextContent('Caleb Quinn')
});
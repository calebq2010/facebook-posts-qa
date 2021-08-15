import React from 'react';
import { render, screen } from '@testing-library/react';
import { Post } from "./post"

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

test('renders location section', () => {
  render(<Post post={post} />)

  const locationSection = screen.getByTestId('location-section')
  
  expect(locationSection).toBeInTheDocument()
});

test('renders map marker icon', () => {
  render(<Post post={post} />)

  const mapMarker = screen.getByTestId('map-marker')
  
  expect(mapMarker).toBeInTheDocument()
});

test('renders the users location', () => {
  render(<Post post={post} />)

  const userLocation = screen.getByTestId('user-location')
  
  expect(userLocation).toBeInTheDocument()
  expect(userLocation).toHaveTextContent('OH, USA')
});

test('renders the post time', () => {
  render(<Post post={post} />)

  const postedTime = screen.getByTestId('posted-time')
  
  expect(postedTime).toBeInTheDocument()
  expect(postedTime).toHaveTextContent('1 minute ago')
});

test('renders the post text', () => {
  render(<Post post={post} />)

  const postValue = screen.getByTestId('post-value')
  
  expect(postValue).toBeInTheDocument()
  expect(postValue).toHaveTextContent('This is what is on my mind and a post value')
});

test('renders the like and comment spans', () => {
  render(<Post post={post} />)

  const likeElement = screen.getByTestId('post-likes')
  const commentElement = screen.getByTestId('post-comments')
  
  expect(likeElement).toBeInTheDocument()
  expect(commentElement).toBeInTheDocument()

  expect(likeElement).toHaveTextContent('0 Likes')
  expect(commentElement).toHaveTextContent('0 Comments')
});

test('renders the like comment section', () => {
  render(<Post post={post} />)

  const likeCommentSection = screen.getByTestId('like-comment-section')
  
  expect(likeCommentSection).toBeInTheDocument()
});

test('renders the like button', () => {
  render(<Post post={post} />)

  const likeBtn = screen.getByTestId('like-btn')
  
  expect(likeBtn).toBeInTheDocument()
});

test('renders the comment button', () => {
  render(<Post post={post} />)

  const commentBtn = screen.getByTestId('comment-btn')
  
  expect(commentBtn).toBeInTheDocument()
});
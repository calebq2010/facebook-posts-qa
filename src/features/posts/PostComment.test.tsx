import React from 'react';
import { render, screen } from '@testing-library/react';
import { PostComment } from "./PostComment"

test('renders the post comment component', () => {
  render(<PostComment />)

  const mainPostCommentSection = screen.getByTestId('post-comment-main')
  
  expect(mainPostCommentSection).toBeInTheDocument()
});

test('renders the profile picture', () => {
  render(<PostComment />)

  const profilePicture = screen.getByTestId('profile-picture')

  expect(profilePicture).toBeInTheDocument()
})

test('renders the post it button',  () => {
  render(<PostComment />)

  const postItBtn = screen.getByTestId('post-it-btn')

  expect(postItBtn).toBeInTheDocument()
})
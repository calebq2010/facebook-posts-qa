import React from 'react';
import { PostComment } from './PostComment'

export const MainCommentSection = () => {
  return (
    <div data-testid='main-comment-component'className='d-flex justify-content-center'>
      <PostComment />
    </div>
  )
}
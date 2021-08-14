import React from 'react';
import { FC } from 'react'
import { PostsList } from './ListOfPosts-styling'
import { Post } from './post'


type ListOfPostsProps = {
  posts: string[]
}

export const ListOfPosts:FC<ListOfPostsProps> = ({ posts }: ListOfPostsProps) => {

  const finishedPosts = posts.map((post, index) => (
    <Post key={index} post={post} />
  ))

  return (
    <PostsList data-testid='post-list'>{finishedPosts}</PostsList>
  )
}
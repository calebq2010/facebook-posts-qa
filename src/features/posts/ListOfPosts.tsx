import React, { useState, FC } from 'react'
import {  PostsList } from './ListOfPosts-styling'


type ListOfPostsProps = {
  posts: string[]
}

export const ListOfPosts:FC<ListOfPostsProps> = ({ posts }: ListOfPostsProps) => {

  return (
    <PostsList data-testid='post-list'> </PostsList>
  )
}
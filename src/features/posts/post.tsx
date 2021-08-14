import { FC } from 'react'
import {  PostItem } from './post-styling'


type PostProps = {
  post: string
}

export const Post:FC<PostProps> = ({ post }: PostProps) => {

  return (
    <PostItem data-testid='post'></PostItem>
  )
}
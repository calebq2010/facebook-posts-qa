import { FC } from 'react'
import {  PostsList } from './ListOfPosts-styling'


type ListOfPostsProps = {
  posts: string[]
}

export const ListOfPosts:FC<ListOfPostsProps> = ({ posts }: ListOfPostsProps) => {

  const finishedPosts = posts.map((post) => {
    
  })

  return (
    <PostsList data-testid='post-list'> 
      <ul>
        {posts.map((post) => {
          return <li key={post}>{post}</li>
        })}
      </ul>
    </PostsList>
  )
}
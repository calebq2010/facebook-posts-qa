import { PostComment } from './PostComment'

export const MainPostSection = () => {
  return (
    <div data-testid='main-post-component'className='d-flex justify-content-center'>
      <PostComment />
    </div>
  )
}
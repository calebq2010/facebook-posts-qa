import React from 'react';
import './App.css'
import { MainPostSection } from '../features/posts/MainPostSection';
import { ListOfPosts } from '../features/posts/ListOfPosts'
import { useSelector, useDispatch } from 'react-redux';
import { PostsState } from '../features/posts/postsReducer';
import { addPost } from '../features/posts/actionsSlice'

function App(): JSX.Element {
  const posts = useSelector<PostsState, PostsState["posts"]>(
    (state) => state.posts
  )
  
  const dispatch = useDispatch()

  const onAddPost = (post: string) => {
    dispatch(addPost(post))
  }

  return (
    <div className="App">
      <div className="main-post-header">
        <MainPostSection addPost={onAddPost} />
        <ListOfPosts posts={posts} />
      </div>
    </div>
  );
}

export default App;

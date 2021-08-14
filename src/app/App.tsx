import './App.css'
import { MainPostSection } from '../features/posts/MainPostSection';
import { useSelector, useDispatch } from 'react-redux';
import { PostsState } from '../features/posts/postsReducer';
import { addPost } from '../features/posts/actionsSlice'

function App() {
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
        <ul>
          {posts.map((post) => {
            return <li key={post}>{post}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

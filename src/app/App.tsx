import './App.css'
import { MainPostSection } from '../features/posts/MainPostSection';

function App() {
  return (
    <div className="App">
      <div className="main-post-header">
        <MainPostSection addPost={alert} />
      </div>
    </div>
  );
}

export default App;
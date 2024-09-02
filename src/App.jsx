import React from 'react';
import PostProvider from './Context/PostContext';
import PostList from './Component/PostList';
import PostDetail from './Component/PostDetail';

function App() {
  return (
    <PostProvider>
      <div className="App">
        <h1>Liste des posts</h1>
        <PostList />
        <PostDetail />
      </div>
    </PostProvider>
  );
}

export default App;

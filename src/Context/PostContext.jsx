import React, { createContext, useState, useEffect } from 'react';

export const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <PostContext.Provider value={{ posts, selectedPost, setSelectedPost }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;

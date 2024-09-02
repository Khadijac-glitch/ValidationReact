import React, { useContext } from 'react';
import { PostContext } from '../Context/PostContext';

const PostList = () => {
  const { posts, setSelectedPost } = useContext(PostContext);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} onClick={() => setSelectedPost(post)}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;

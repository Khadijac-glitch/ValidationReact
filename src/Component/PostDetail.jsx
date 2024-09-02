import React, { useContext } from 'react';
import { PostContext } from '../Context/PostContext';

const PostDetail = () => {
  const { selectedPost } = useContext(PostContext);

  if (!selectedPost) return <p>Sélectionnez un post pour voir les détails.</p>;

  return (
    <div>
      <h2>{selectedPost.title}</h2>
      <p>{selectedPost.body}</p>
    </div>
  );
};

export default PostDetail;

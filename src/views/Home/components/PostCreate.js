import React from 'react';
import { Link } from 'react-router-dom';

const PostCreate = () => {
  return (
    <Link className="posts-text" to="/post/new">Create New Post</Link>
  )
}

export default PostCreate;

import React from 'react';
import PostCard from './PostCard';

const PostLists = ({ data, visiblePosts }) => {
  return (
    <ul className="posts-list">
      {
        data.slice(0, visiblePosts).map(post => (
          <li className="posts-item" key={post.id}>
            <PostCard post={post} />
          </li>
        ))
      }
    </ul>
  )
}

export default PostLists;

import React from 'react';
import PostCard from './PostCard';

const PostLists = ({ newPost, data, visiblePosts }) => {
  return (
    <ul className="posts-list">
      {
       Object.keys(newPost).length !== 0 && (
        <li className="posts-item" key={newPost.id}>
          <PostCard post={newPost} />
        </li> 
       ) 
      }
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

import React, { useState, useEffect, Fragment } from 'react';
import { AUTH_TOKEN } from '../../../utils/constants';
import usePosts from '../../../hooks/usePosts';

import Button from '../../../components/Button';
import PostCreate from './PostCreate';
import PostLists from './PostLists';

const Posts = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [visiblePosts, setVisiblePosts] = useState(6);
  const isLoggedIn = localStorage.getItem(AUTH_TOKEN);
  const posts = usePosts();

  useEffect(() => {
    if (posts && posts.data) {
      setData(posts.data);
    }

    if (posts) {
      setLoading(posts.loading);
    }
  }, [posts]);

  // console.log({posts})

  const handleLoadMoreClick = () => {
    setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 6);
  }

  return (
    <div className="posts l-container">
      <div className="posts-inner">
        <h2 className="posts-heading">News</h2>
        { isLoggedIn && <PostCreate /> }
      </div>

      {!loading
        ? (
          <Fragment>
            <PostLists data={data} visiblePosts={visiblePosts} />
            <div className="posts-button">
              <Button
                text="LOAD MORE"
                onClick={handleLoadMoreClick}
                style={{marginTop: '70px'}}
              />
            </div>
          </Fragment>
        )
        : (<div>Loading...</div>)
      }
    </div>
  );
};

export default Posts;

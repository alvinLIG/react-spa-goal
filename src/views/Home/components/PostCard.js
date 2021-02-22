import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import noimage from '../../../assets/images/noimage.jpg';

const PostCard = ({ post }) => {

  const image = (post.image != null && post.image !== "") ? post.image : noimage;
  const date = moment(post.createdAt).format('YYYY.MM.DD');
  const dateTime = moment(post.createdAt).format('YYYY-MM-DD');

  return (
    <Link to={`/post/${post.id}`}>
      <article className="post-card">
        <div className="post-card-eyecatch-wrapper">
          <div className="post-card-eyecatch" style={{backgroundImage: `url(${image})`}}></div>
        </div>

        <div className="post-card-content">
          {post.createdAt ?
            <time className="post-card-date" dateTime={dateTime}>{date}</time>
            : null
          }
          <h3 className="post-card-heading">{post.title}</h3>
        </div>
      </article>
    </Link>
  )
}

export default PostCard;

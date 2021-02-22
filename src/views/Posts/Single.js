import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  Link,
  useParams,
} from 'react-router-dom';
import moment from 'moment';

import useSinglePost from '../../hooks/useSinglePost';
import { addPostComment, fetchSinglePost } from '../../redux/modules/post/postActions';
import { AUTH_TOKEN } from '../../utils/constants';

import Breadcrumb from './components/Breadcrumb';
import Button from '../../components/Button';

import noimage from '../../assets/images/noimage.jpg';

const Single = ({ ...props }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [comment, setComment] = useState('');
  const [single, setSingle] = useState({});
  const isLoggedIn = localStorage.getItem(AUTH_TOKEN);
  const post = useSinglePost(id);
  const addCommentHandler = () => toast.success('Comment Added!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  useEffect(() => {
    if (post && post.single) {
      setSingle(post.single);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPostComment(id, single.id, comment))
    setComment('');
    addCommentHandler();
    dispatch(fetchSinglePost(id));
  }

  return (
    <Fragment>
      <Breadcrumb text={single.title} />

      <div className="single l-container">
        <div className="single-header">

          {isLoggedIn ?
            <div className="single-button-wrapper">
              <Link className="single-button" to={`/post/${single.id}/edit`}>Edit Post</Link>
            </div>
            : null
          }

          {single.createdAt ?
            <time className="single-date" dateTime={moment(single.createdAt).format('YYYY-MM-DD')}>{moment(single.createdAt).format('YYYY.MM.DD')}</time>
            : null
          }
          <h1 className="single-heading">{single.title}</h1>
          <div className="single-eyecatch" style={{backgroundImage: `url(${(single.image != null && single.image !== "") ? single.image : noimage})`}}></div>
        </div>

        <div className="single-body">
          <p>{single.content}</p>
        </div>

        <div className="single-footer">
          <div className="comment">
            <h2 className="comment-heading">COMMENT</h2>

            {
              Object.keys(post.comment).length > 0 && (
                <div className="comment-box" key={post.comment['id']}>
                  <p className="comment-text">{post.comment['content']}</p>
                  <p className="comment-date">{`${moment().diff(moment(post.comment['createdAt']), 'days')} days ago`}</p>
                </div>
              )
            }
            {
              single.comments !== undefined && single.comments.map((comment) => (
                <div className="comment-box" key={comment.id}>
                  <p className="comment-text">{comment.content}</p>
                  <p className="comment-date">{`${moment().diff(moment(comment.createdAt), 'days')} days ago`}</p>
                </div>
              ))
            }

            <form className="comment-form" onSubmit={handleSubmit}>
              <textarea
                className="comment-textarea"
                placeholder="Write comment"
                value={comment}
                onChange={e => setComment(e.target.value)}
              >
              </textarea>

              <div className="comment-button">
                <Button
                  text="Submit"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Single;

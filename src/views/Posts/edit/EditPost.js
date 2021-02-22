import React, { Fragment, useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import useSinglePost from '../../../hooks/useSinglePost';
import { editPostComment, fetchSinglePost } from '../../../redux/modules/post/postActions';
import { toast } from 'react-toastify';

import Breadcrumb from '../components/Breadcrumb';
import ConfirmModal from '../components/ConfirmModal';
import Button from '../../../components/Button';

const EditPost = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const { single } = useSinglePost(id);
  const editPostHandler = () => toast.success('Edit Success!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editPostComment(id, title, content, image))
    editPostHandler();
    dispatch(fetchSinglePost(id));
    setTimeout(() => {
      return history.push('/post/' + parseInt(id));
    }, 1000);
  }

  const handleCancel = (e) => {
    e.preventDefault();
    setShowConfirmModal(true);
  }

  const handleCancelYes = () => {
    history.push('/post/' + parseInt(id));
  }

  const handleCancelNo = () => {
    setShowConfirmModal(false);
  }

  const handleImageChange = (e) => {
    let image = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);

    reader.onload = () => {
      setImage(reader.result);
    }
  }

  useEffect(() => {
    if(single) {
      setTitle(single.title);
      setDate(single.createdAt);
      setContent(single.content);
      setImage(single.image);
    }
  }, [single]);

  return (
    <Fragment>
      <Breadcrumb text={title} />

      <form className="single l-container">
        <div className="single-header">
          <div className="single-button-wrapper">
            <button className="single-button" onClick={handleSubmit}>Save Post</button>
            <button className="single-button" onClick={handleCancel}>Cancel</button>
          </div>

          <time className="single-date" dateTime={moment(date).format('YYYY-MM-DD')}>{moment(date).format('YYYY.MM.DD')}</time>

          <textarea
            className="new-post-heading"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          >
          </textarea>

          <div className="new-post-image-wrapper">
            <input
              className="new-post-image"
              type="file"
              onChange={handleImageChange}
            />

            <div className="new-post-image-button">
              <Button text="UPLOAD IMAGE" style={{width: "260px"}} />
            </div>

            {image !== '' ?
              <input
                className="new-post-image-preview"
                type="file"
                onChange={handleImageChange}
                style={{backgroundImage: `url(${image})`}}
              />
              : null
            }
          </div>

          <textarea
            className="new-post-content"
            placeholder="Content"
            value={content}
            onChange={e => setContent(e.target.value)}
          >
          </textarea>
        </div>
      </form>

      {showConfirmModal ?
        <ConfirmModal
          handleCancelYes={handleCancelYes}
          handleCancelNo={handleCancelNo}
        />
        : null
      }
    </Fragment>
  )
}

export default EditPost;

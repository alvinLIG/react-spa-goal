import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import moment from 'moment';

import { addSinglePost } from '../../../redux/modules/post/postActions';

import Breadcrumb from '../components/Breadcrumb';
import Button from '../../../components/Button';
import ConfirmModal from '../components/ConfirmModal';

const NewPost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const history = useHistory();
  const currentDate = moment();
  const addPostHandler = () => toast.success('Success!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  // const newPost = useSelector((state) => state.post);

  const handleSubmit = (e) => {
    e.preventDefault();
    addPostHandler();
    dispatch(addSinglePost(title, content, image))
    history.push('/post');
  }

  const handleCancel = (e) => {
    e.preventDefault();
    setShowConfirmModal(true);
  }

  const handleCancelYes = () => {
    history.push('/');
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

  // useEffect(() => {
  //   if (Object.keys(newPost.new).length !== 0) {
  //     const { id } = newPost.new;
  //     history.push('/post/' + id);
  //   }
  // }, [newPost, history]);

  return (
    <>
      <Breadcrumb text="Create New Post" />

      <form className="new-post l-container">
        <div className="new-post-button-wrapper">
          <button className="new-post-button" onClick={handleSubmit}>Save Post</button>
          <button className="new-post-button" onClick={handleCancel}>Cancel</button>
        </div>

        <time className="new-post-date" dateTime={currentDate.format('YYYY-MM-DD')}>{currentDate.format('YYYY.MM.DD')}</time>

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
            <div className="new-post-image-preview" style={{backgroundImage: `url(${image})`}}></div>
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
      </form>

      {showConfirmModal ?
        <ConfirmModal
          handleCancelYes={handleCancelYes}
          handleCancelNo={handleCancelNo}
        />
        : null
      }
    </>
  );
}

export default NewPost;

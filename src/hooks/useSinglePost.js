import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSinglePost } from '../redux/modules/post/postActions';

const useSinglePost = (id) => {
  const { post } = useSelector((state) => state)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSinglePost(id))
  }, [dispatch, id])

  return post;
};

export default useSinglePost;

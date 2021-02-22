import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/modules/post/postActions';

const usePosts = () => {
  const { post } = useSelector((state) => state)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  return post;
};

export default usePosts;

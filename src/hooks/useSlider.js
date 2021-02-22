import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostsSlider } from '../redux/modules/post/postActions';

const useSlider = () => {
  const { post } = useSelector((state) => state)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsSlider())
  }, [dispatch])

  return post;
};

export default useSlider;

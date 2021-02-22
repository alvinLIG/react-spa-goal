import { GET_ALL_POSTS } from '../../../operations/queries/getAllPosts';
import { GET_SLIDER_POSTS } from '../../../operations/queries/getSliderPosts';
import { GET_POST } from '../../../operations/queries/getPost';
import { ADD_COMMENT } from '../../../operations/mutations/addComment';
import { ADD_POST } from '../../../operations/mutations/addPost';
import { EDIT_POST } from '../../../operations/mutations/editPost';
import { client } from '../../../utils/settings';

import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_SLIDER,
  FETCH_POST_SINGLE,
  NEW_POST_SINGLE,
  NEW_POST_COMMENT,
  FETCH_POST_ERROR,
} from './postTypes'

export const fetchPostRequest = () => {
  return {
    type: FETCH_POST_REQUEST
  }
}

export const fetchPostSuccess = (data) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: data
  }
}

export const fetchPostSliderSuccess = (data) => {
  return {
    type: FETCH_POST_SLIDER,
    payload: data
  }
}

export const fetchPostSingle = (data) => {
  return {
    type: FETCH_POST_SINGLE,
    payload: data
  }
}

export const fetchPostComment = (data) => {
  return {
    type: NEW_POST_COMMENT,
    payload: data
  }
}

export const newPostSingle = (data) => {
  return {
    type: NEW_POST_SINGLE,
    payload: data
  }
}

export const fetchPostError = (error) => {
  return {
    type: FETCH_POST_ERROR,
    payload: error
  }
}

export const fetchPostsSlider = () => {
  return async (dispatch) => {
    dispatch(fetchPostRequest())
    const { data, error } = await client.query({
      query: GET_SLIDER_POSTS,
      variables: { pagination: { limit: 3 }}
    });

    if (data) {
      dispatch(fetchPostSliderSuccess(data.posts))
    }

    if (error) {
      dispatch(fetchPostError(error))
    }
  }
}

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostRequest())
    const { data, error } = await client.query({
      query: GET_ALL_POSTS
    });

    if (data) {
      dispatch(fetchPostSuccess(data.posts))
    }

    if (error) {
      dispatch(fetchPostError(error))
    }
  }
}

export const fetchSinglePost = (id) => {
  return async (dispatch) => {
    dispatch(fetchPostRequest())
    const { data, error } = await client.query({
      query: GET_POST,
      variables: { id: parseInt(id) }
    });

    if (data) {
      dispatch(fetchPostSingle(data.post))
    }

    if (error) {
      dispatch(fetchPostError(error))
    }
  }
}

export const addPostComment = (paramID, id, comment) => {
  return async (dispatch) => {
    const { data } = await client.mutate({
      mutation: ADD_COMMENT,
      refetchQueries: [{
        query: GET_POST,
        variables: { id: parseInt(paramID) }
      }],
      variables: {
        postId: id,
        content: comment,
        createAt: new Date()
      }
    });
    dispatch(fetchPostComment(data.addComment));
  }
}

export const addSinglePost = (title, content, image) => {
  return async (dispatch) => {
    const { data } = await client.mutate({
      mutation: ADD_POST,
      variables: {
        title: title,
        content: content,
        image: image
      }
    });
    dispatch(newPostSingle(data.addPost));
  }
}

export const editPostComment = (id, title, content, image) => {
  return async () => {
    await client.mutate({
      mutation: EDIT_POST,
      refetchQueries: [{
        query: GET_POST,
        variables: { id: parseInt(id) }
      }],
      variables: {
        id: parseInt(id),
        title: title,
        content: content,
        image: image
      }
    });
  }
}

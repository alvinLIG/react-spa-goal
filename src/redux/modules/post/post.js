import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
  FETCH_POST_SLIDER,
  FETCH_POST_SINGLE,
  NEW_POST_SINGLE,
  NEW_POST_COMMENT,
} from './postTypes'

const initialState = {
  loading: true,
  data: [],
  comment: {},
  single: {},
  slider: [],
  error: '',
  new: {},
  cached: false,
}

const post = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_POST_REQUEST:
      return {
        ...state,
        loading: true,
        cached: false,
      }
    case FETCH_POST_SLIDER:
      return {
        ...state,
        loading: false,
        slider: action.payload,
        error: '',
        cached: true,
      }
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
        cached: true,
      }
    case FETCH_POST_SINGLE:
      return {
        ...state,
        loading: false,
        single: action.payload,
        error: '',
        cached: true,
      }
    case NEW_POST_SINGLE:
      return {
        ...state,
        new: action.payload
      }
    case NEW_POST_COMMENT:
      return {
        ...state,
        comment: action.payload
      }
    case FETCH_POST_ERROR:
      return {
        ...state,
        data: [],
        error: action.payload,
        cached: false,
      }
    default:
      return state;
  }
}

export default post

import {
  FETCH_SAMPLE_REQUEST,
  FETCH_SAMPLE_SUCCESS,
  FETCH_SAMPLE_ERROR
} from './sampleTypes'

const initialState = {
  loading: false,
  data: [],
  error: '',
  cached: false,
}

const sample = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SAMPLE_REQUEST:
      return {
        ...state,
        loading: true,
        cached: false,
      }
    case FETCH_SAMPLE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
        cached: true,
      }
    case FETCH_SAMPLE_ERROR:
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

export default sample
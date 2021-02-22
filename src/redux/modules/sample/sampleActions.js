import {
  FETCH_SAMPLE_REQUEST,
  FETCH_SAMPLE_SUCCESS,
  FETCH_SAMPLE_ERROR
} from './sampleTypes'

export const fetchSampleRequest = () => {
  return {
    type: FETCH_SAMPLE_REQUEST
  }
}

export const fetchSampleSuccess = (data) => {
  return {
    type: FETCH_SAMPLE_SUCCESS,
    payload: data
  }
}

export const fetchSampleError = (error) => {
  return {
    type: FETCH_SAMPLE_ERROR,
    payload: error
  }
}


import { combineReducers } from 'redux';
import sample from './sample/sample';
import post from './post/post';

const rootReducer = combineReducers({
  sample,
  post,
})

export default rootReducer;
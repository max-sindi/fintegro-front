import { combineReducers } from 'redux';
import counter from './initialReducer';

const reducers = {
  counter,
}

export default combineReducers(
  reducers
)

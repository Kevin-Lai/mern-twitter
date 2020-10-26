import { combineReducers } from 'redux';
import session from './session_reducer';

import errors from "./errors_reducer";
import sessionErrors from "./session_errors_reducer";
import tweets from "./tweets_reducer";

import sessionAPI from "./session_api_reducer";

const RootReducer = combineReducers({
  session,
  errors,
  sessionErrors,
  sessionAPI,
  tweets
});

export default RootReducer;
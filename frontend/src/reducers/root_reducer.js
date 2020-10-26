import { combineReducers } from 'redux';
import session from './session_reducer';

import errors from "./errors_reducer";
import sessionErrors from "./session_errors_reducer";

const RootReducer = combineReducers({
  session,
  errors,
  sessionErrors
});

export default RootReducer;
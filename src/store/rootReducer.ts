import { History } from 'history';

import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux-seamless-immutable';

import { userSignup, userLogin } from './domains/user/auth';

const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  auth: userSignup,
  userLogin: userLogin
});

export default createRootReducer;

import { History } from 'history';

import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux-seamless-immutable';

import { userAuth } from './domains/user/auth';
import { userData } from './domains/user/reducer';

const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  auth: userAuth,
  data: userData
});

export default createRootReducer;

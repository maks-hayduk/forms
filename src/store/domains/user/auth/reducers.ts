import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, UserActionTypes } from '../actionTypes';
import { IInitialAuthState } from '../types';

const initialSignupState: ImmutableObject<IInitialAuthState> = Immutable({
  token: '',
  isRegistered: false,
  isAuthorized: false
});

export const userAuth = (state = initialSignupState, action: UserActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.USER_LOGOUT:
      return initialSignupState;
    case ActionTypeKeys.PULL_STORAGE_TOKEN:
      return state
        .setIn(['token'], action.token)
        .setIn(['isAuthorized'], true);
    case ActionTypeKeys.USER_SIGNUP_FULFILLED:
      return state
        .setIn(['isRegistered'], true);
    case ActionTypeKeys.USER_LOGIN_FULFILLED: {
      return state
        .setIn(['token'], action.payload.token)
        .setIn(['isAuthorized'], true);
    }
    default:
      return state;
  }
};

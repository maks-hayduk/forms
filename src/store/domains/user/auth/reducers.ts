import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, UserLoginActionTypes } from '../actionTypes';
import { IInitialAuthState, IInitialLoginState } from '../types';

const initialSignupState: ImmutableObject<IInitialAuthState> = Immutable({
  isRegistered: false
});

export const userSignup = (state = initialSignupState, action: UserLoginActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.USER_SIGNUP_FULFILLED:
      console.log(action);
      return state
        .setIn(['isRegistered'], true);
    default:
      return state;
  }
};

const initialLoginState: ImmutableObject<IInitialLoginState> = Immutable({
  token: ''
});

export const userLogin = (state = initialLoginState, action: UserLoginActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.USER_LOGIN_FULFILLED:
      return state
        .setIn(['token'], action.payload);
    default:
      return state;
  }
};

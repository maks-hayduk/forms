import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, UserDataActionType } from './actionTypes';
import { IInitialDataState } from './types';

const initialSignupState: ImmutableObject<IInitialDataState> = Immutable({
  company: {
    createdAt: '',
    name: '',
    updatedAt: '',
    _id: ''
  },
  email: '',
  fullName: '',
  role: 'user',
  _id: ''
});

export const userData = (state = initialSignupState, action: UserDataActionType) => {
  switch (action.type) {
    case ActionTypeKeys.USER_LOGOUT:
      return initialSignupState;
    case ActionTypeKeys.GET_USER_DATA_FULFILLED:
      return state
        .merge(action.payload.user);
    default:
      return state;
  }
};

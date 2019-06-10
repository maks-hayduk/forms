import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, IDogActionType } from './actionTypes';
import { IInitialDogState } from './types';

const initialDogState: ImmutableObject<IInitialDogState> = Immutable({
  status: '',
  message: []
});

export const dogs = (state = initialDogState, action: IDogActionType) => {
  switch (action.type) {
    case ActionTypeKeys.GET_DOGS_FULFILLED:
      return state
        .setIn(['status'], action.payload.status)
        .setIn(['message'], state.message.concat(action.payload.message));
    default:
      return state;
  }
};

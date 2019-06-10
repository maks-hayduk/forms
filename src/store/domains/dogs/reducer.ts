import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, IDogActionType } from './actionTypes';
import { IInitialDogsState } from './types';

const initialDogState: ImmutableObject<IInitialDogsState> = Immutable({
  status: '',
  message: []
});

export const dogs = (state = initialDogState, action: IDogActionType) => {
  switch (action.type) {
    case ActionTypeKeys.GET_DOGS_FULFILLED:
      return state
        .setIn(['status'], action.payload.status)
        .updateIn(['message'], val => val.concat(action.payload.message));
    default:
      return state;
  }
};

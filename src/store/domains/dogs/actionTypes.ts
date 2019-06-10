import { IInitialDogState } from './types';

export enum ActionTypeKeys {
  GET_DOGS = 'dogs/GET_DOGS',
  GET_DOGS_FULFILLED = 'dogs/GET_DOGS_FULFILLED',
  GET_DOGS_REJECTED = 'dogs/GET_DOGS_REJECTED'
}

export interface IDogsActionType {
  type: ActionTypeKeys.GET_DOGS;
  payload: Promise<IInitialDogState>;
}

export interface IDogsFulfilledActionType {
  type: ActionTypeKeys.GET_DOGS_FULFILLED;
  payload: IInitialDogState;
}

export interface IDogsRejectedActionType {
  type: ActionTypeKeys.GET_DOGS_REJECTED;
  payload: Response;
}

export type IDogActionType = 
  | IDogsActionType
  | IDogsFulfilledActionType
  | IDogsRejectedActionType;

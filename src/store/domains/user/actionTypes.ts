import { IInitialDataState } from './types';

export enum ActionTypeKeys {
  USER_LOGIN = 'user/auth/USER_LOGIN',
  USER_LOGIN_FULFILLED = 'user/auth/USER_LOGIN_FULFILLED',
  USER_LOGIN_REJECTED = 'user/auth/USER_LOGIN_REJECTED',

  USER_SIGNUP = 'user/auth/USER_SIGNUP',
  USER_SIGNUP_FULFILLED = 'user/auth/USER_SIGNUP_FULFILLED',
  USER_SIGNUP_REJECTED = 'user/auth/USER_SIGNUP_REJECTED',

  GET_USER_DATA = 'user/GET_USER_DATA',
  GET_USER_DATA_FULFILLED = 'user/GET_USER_DATA_FULFILLED',
  GET_USER_DATA_REJECTED = 'user/GET_USER_DATA_REJECTED',

  PULL_STORAGE_TOKEN = 'user/auth/PULL_STORAGE_TOKEN',
  USER_LOGOUT = 'user/auth/USER_LOGOUT'
};

export interface IUserLoginActionType {
  type: ActionTypeKeys.USER_LOGIN;
  payload: Promise<{}>;
}

export interface IUserLoginFulfilledActionType {
  type: ActionTypeKeys.USER_LOGIN_FULFILLED;
  payload: {token: string};
}

export interface IUserLoginRejectedActionType {
  type: ActionTypeKeys.USER_LOGIN_REJECTED;
  payload: Response;
}

export interface IUserSignupActionType {
  type: ActionTypeKeys.USER_SIGNUP;
  payload: Promise<{}>;
}

export interface IUserSignupFulfilledActionType {
  type: ActionTypeKeys.USER_SIGNUP_FULFILLED;
  payload: {};
}

export interface IUserSignupRejectedActionType {
  type: ActionTypeKeys.USER_SIGNUP_REJECTED;
  payload: Response;
}

export interface IGetUserDataActionType {
  type: ActionTypeKeys.GET_USER_DATA;
  payload: Promise<{user: IInitialDataState}>;
}

export interface IGetUserDataFulfilledActionType {
  type: ActionTypeKeys.GET_USER_DATA_FULFILLED;
  payload: {user: IInitialDataState};
}

export interface IGetUserDataRejectedActionType {
  type: ActionTypeKeys.GET_USER_DATA_REJECTED;
  payload: Response;
}

export interface IPullStorageTokenActionType {
  type: ActionTypeKeys.PULL_STORAGE_TOKEN;
  token: string | null;
}

export interface IUserLogoutActionType {
  type: ActionTypeKeys.USER_LOGOUT;
}

export type UserActionTypes = 
  | IUserLoginFulfilledActionType
  | IUserSignupFulfilledActionType
  | IPullStorageTokenActionType
  | IUserLogoutActionType;

export type UserDataActionType = 
  | IGetUserDataFulfilledActionType
  | IUserLogoutActionType;

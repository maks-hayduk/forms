export enum ActionTypeKeys {
  USER_LOGIN = 'user/auth/USER_LOGIN',
  USER_LOGIN_FULFILLED = 'user/auth/USER_LOGIN_FULFILLED',
  USER_LOGIN_REJECTED = 'user/auth/USER_LOGIN_REJECTED',

  USER_SIGNUP = 'user/auth/USER_SIGNUP',
  USER_SIGNUP_FULFILLED = 'user/auth/USER_SIGNUP_FULFILLED',
  USER_SIGNUP_REJECTED = 'user/auth/USER_SIGNUP_REJECTED'
};

export interface IUserLoginActionType {
  type: ActionTypeKeys.USER_LOGIN;
  payload: Promise<{}>;
}

export interface IUserLoginFulfilledActionType {
  type: ActionTypeKeys.USER_LOGIN_FULFILLED;
  payload: {};
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

export type UserLoginActionTypes = 
  | IUserLoginFulfilledActionType
  | IUserSignupFulfilledActionType
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { replace } from 'react-router-redux';
import * as api from './api';
import { IUser, IUserLogin } from './types';
import {
  IUserLoginActionType,
  IUserSignupActionType,
  ActionTypeKeys
} from './actionTypes';
import IStoreState from 'store/IStoreState';

export type Thunk<R> = ThunkAction<R, IStoreState, {}, AnyAction>;

export type IUserSignupAction = (data: IUser) => IUserSignupActionType;
export type IHandleUserSignup = () => Thunk<void>;
export type IUserLoginAction = (data: IUserLogin) => IUserLoginActionType;
export type IHandleUserLoginToken = () => Thunk<void>;

export const userSignup: IUserSignupAction = (data: IUser) => ({
  type: ActionTypeKeys.USER_SIGNUP,
  payload: api.userSignup(data)
});

export const handleUserSignup: IHandleUserSignup = () => 
  async (dispatch, getState) => {
    try {
      const state = getState();
      if (state.auth.isRegistered) {
        dispatch(replace('/login'));
      } else {
        throw new Error('Sign up failed');
      }
    } catch (e) {
      alert(e);
      dispatch(replace('/start'));
    }
  };

export const userLogin: IUserLoginAction = (data: IUserLogin) => ({
  type: ActionTypeKeys.USER_LOGIN,
  payload: api.userLogin(data)
});
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { replace } from 'react-router-redux';
import * as api from './api';
import { IUserSignup, IUserLogin } from './types';
import {
  ActionTypeKeys,
  IUserLoginActionType,
  IUserSignupActionType,
  IGetUserDataActionType,
  IPullStorageTokenActionType,
  IUserLogoutActionType
} from './actionTypes';
import IStoreState from 'store/IStoreState';
import { apiClient } from 'services';
import { RoutesTypeKeys } from 'consts';

export type Thunk<R> = ThunkAction<R, IStoreState, {}, AnyAction>;

export type IUserSignupAction = (data: IUserSignup) => IUserSignupActionType;
export type IHandleUserSignup = (data: IUserSignup) => Thunk<void>;

export type IUserLoginAction = (data: IUserLogin) => IUserLoginActionType;
export type IHandleUserLogin = (data: IUserLogin) => Thunk<void>;

export type IGetUserDataAction = () => IGetUserDataActionType;

export type IUserLogoutAction = () => IUserLogoutActionType;
export type IHandleUserLogout = () => Thunk<void>;

export type IPullStorageTokenAction = (token: string | null) => IPullStorageTokenActionType;
export type IHandlePullStorageToken = () => Thunk<void>;

export const userSignup: IUserSignupAction = (data: IUserSignup) => ({
  type: ActionTypeKeys.USER_SIGNUP,
  payload: api.userSignup(data)
});

export const handleUserSignup: IHandleUserSignup = (data) => 
  async (dispatch, getState) => {
    await dispatch(userSignup(data));
    const state = getState();
    if (state.auth.isRegistered) {
      alert('Successfully registered');
      dispatch(replace(RoutesTypeKeys.Login));
    } else {
      dispatch(replace(RoutesTypeKeys.Start));
    }
  };

export const userLogin: IUserLoginAction = (data: IUserLogin) => ({
  type: ActionTypeKeys.USER_LOGIN,
  payload: api.userLogin(data)
});

export const handleUserLogin: IHandleUserLogin = (data) =>
  async (dispatch, getState) => {
    await dispatch(userLogin(data));
    const state = getState();
    if (state.auth.token !== '') {
      localStorage.setItem('token', state.auth.token);
      apiClient.setDefaultHeaders('Authorization', state.auth.token);
      dispatch(replace(RoutesTypeKeys.Dashboard));
    }
  };

export const getUserData: IGetUserDataAction = () => ({
  type: ActionTypeKeys.GET_USER_DATA,
  payload: api.userData()
});

export const userLogout: IUserLogoutAction = () => ({
  type: ActionTypeKeys.USER_LOGOUT
});

export const hanldeUserLogout: IHandleUserLogout = () =>
  async (dispatch, getState) => {
    await dispatch(userLogout());
    localStorage.removeItem('token');
    apiClient.setDefaultHeaders('Authorization', '');
    dispatch(replace(RoutesTypeKeys.Start));
  };

export const pullStorageToken: IPullStorageTokenAction = (token: string | null) => ({
  type: ActionTypeKeys.PULL_STORAGE_TOKEN,
  token
});

export const handlePullStorageToken: IHandlePullStorageToken = () => 
  async (dispatch, getState) => {
    const token = localStorage.getItem('token');
    if (token !== null) {
      await dispatch(pullStorageToken(token));
      const state = getState();
      apiClient.setDefaultHeaders('Authorization', state.auth.token);
    } else {
      dispatch(replace(RoutesTypeKeys.Login));
    }
  };

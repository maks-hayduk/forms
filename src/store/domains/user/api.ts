import { apiClient } from 'services';
import { IUser, IUserLogin } from './types';

export const userSignup = (data: IUser) => apiClient.post('/auth/signup', {
  data
});

export const userLogin = (data: IUserLogin) => apiClient.post('/auth/login', {
  data
});

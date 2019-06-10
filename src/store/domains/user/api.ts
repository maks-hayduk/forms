import { apiClient } from 'services';
import { IUserSignup, IUserLogin } from './types';

export const userSignup = (data: IUserSignup) => apiClient.post('/auth/signup', {
  data
});

export const userLogin = (data: IUserLogin) => apiClient.post('/auth/login', {
  data
});

export const userData = () => apiClient.get('/users/me');

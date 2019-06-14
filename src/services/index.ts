import ApiClient from './apiClient';
import config from 'config';

export const apiClient = new ApiClient(config.apiUrl);

export const dogApiClient = new ApiClient(config.dogApiUrl);

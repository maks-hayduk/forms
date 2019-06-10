import { dogApiClient } from 'services';

export const dogsPictures = () => dogApiClient.get('/breeds/image/random/3');

import * as api from './api';
import { ActionTypeKeys, IDogsActionType } from './actionTypes';

export type IGetDogsAction = () => IDogsActionType;

export const getDogs: IGetDogsAction = () => ({
  type: ActionTypeKeys.GET_DOGS,
  payload: api.dogsPictures()
});

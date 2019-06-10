import { IInitialAuthState, IInitialDataState, IInitialDogState } from './domains';

export default interface IStoreState {
  auth: IInitialAuthState;
  data: IInitialDataState;
  dogs: IInitialDogState;
}

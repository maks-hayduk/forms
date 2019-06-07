import { IInitialAuthState, IInitialDataState } from './domains/user';

export default interface IStoreState {
  auth: IInitialAuthState;
  data: IInitialDataState;
}

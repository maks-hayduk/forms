import { IInitialAuthState, IInitialLoginState } from './domains/user';

export default interface IStoreState {
  auth: IInitialAuthState;
  userLogin: IInitialLoginState;
}

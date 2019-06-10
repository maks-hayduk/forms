import { 
  IInitialAuthState, 
  IInitialDataState, 
  IInitialDogsState 
} from './domains';

export default interface IStoreState {
  auth: IInitialAuthState;
  data: IInitialDataState;
  dogs: IInitialDogsState;
}

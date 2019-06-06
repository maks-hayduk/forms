import IStoreState from 'store/IStoreState';

export const selectCurrentToken = (state: IStoreState) => {
  return state.userLogin.token;
};

import IStoreState from 'store/IStoreState';

export const selectUserData = (state: IStoreState) => {
  return state.data;
};

export const selectAuthorization = (state: IStoreState) => {
  return state.auth.isAuthorized;
}

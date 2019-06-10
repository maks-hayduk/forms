import IStoreState from 'store/IStoreState';

export const selectDogs = (state: IStoreState) => {
  return state.dogs.message;
};

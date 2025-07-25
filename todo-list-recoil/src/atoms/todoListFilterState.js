import { atom } from 'recoil';

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'all',
});
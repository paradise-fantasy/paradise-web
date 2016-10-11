import { CHANGE_DATA } from './constants';

export const changeData = (name, value) => ({
  type: CHANGE_DATA,
  name,
  value
});

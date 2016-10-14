import { CHANGE_DATA } from './constants';

const initData = [
  { name: 'Frederik', value: 10 },
  { name: 'Raymi', value: 0 },
  { name: 'Kabbe', value: 0 }
];
const dataReducer = (state = initData, action) => {
  switch (action.type) {
    case CHANGE_DATA:
      return state.map(entry =>
        (entry.name !== action.name ? entry : { ...entry, value: action.value })
      );
    default:
      return state;
  }
};

export default dataReducer;

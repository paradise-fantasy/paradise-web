import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
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

const rootReducer = combineReducers({
  data: dataReducer,
  routing
});

export default rootReducer;

import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { concat } from 'lodash';
import { v4 } from 'node-uuid';
import { ADD_LIST_ELEMENT, REMOVE_LIST_ELEMENT } from './constants';

const listReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_LIST_ELEMENT:
      return concat(state, {
        id: v4(),
        text: action.text
      });
    case REMOVE_LIST_ELEMENT:
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  list: listReducer,
  routing
});

export default rootReducer;

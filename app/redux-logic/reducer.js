import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { SET_CHART_DATA } from './constants';

const chartDataReducer = (state = [0, 0, 0, 0, 0], action) => {
  switch (action.type) {
    case SET_CHART_DATA:
      return action.data;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  chartData: chartDataReducer,
  routing
});

export default rootReducer;

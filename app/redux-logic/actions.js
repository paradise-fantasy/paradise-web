import { SET_CHART_TITLE, SET_CHART_DATA, REMOVE_LIST_ELEMENT } from './constants';

export const setChartTitle = (name) => ({
  type: SET_CHART_TITLE,
  name
});

export const setChartData = (input) => ({
  type: SET_CHART_DATA,
  data: input.split(',').map(x => parseInt(x, 10))
});

export const removeListElement = (id) => ({
  type: REMOVE_LIST_ELEMENT,
  id
});

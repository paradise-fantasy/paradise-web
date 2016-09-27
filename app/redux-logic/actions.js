import { ADD_LIST_ELEMENT, REMOVE_LIST_ELEMENT } from './constants';

export const addListElement = (text) => ({
  type: ADD_LIST_ELEMENT,
  text
});

export const removeListElement = (id) => ({
  type: REMOVE_LIST_ELEMENT,
  id
});

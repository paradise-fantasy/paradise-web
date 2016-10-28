import moment from 'moment';
import { API_HOST } from 'config';
import socket from '../socket';

import {
  FETCH_API_RECEIVE,
  SOCKET_API_RECEIVE,
  FETCH_LOG_RECEIVE,
  SOCKET_LOG_RECEIVE,
  SERVICES
} from './constants';
import { receiveFetchApi, receiveSocketApi, receiveFetchLog, receiveSocketLog } from './actions';

const initialApi = () => {
  const state = {};
  SERVICES.forEach(service => { state[service] = {}; });
  return state;
};

export const apiReducer = (state = initialApi(), action) => {
  switch (action.type) {
    case FETCH_API_RECEIVE:
    case SOCKET_API_RECEIVE:
      return {
        ...state,
        [action.service]: action.data
      };
    default:
      return state;
  }
};

export const logReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_LOG_RECEIVE:
      return action.data;
    case SOCKET_LOG_RECEIVE:
      return [].concat(action.data, state);
    default:
      return state;
  }
};

export const notificationsReducer = (state = {}) => state;

const fetchLogs = (dispatch) =>
  fetch(`${API_HOST}/log`)
  .then(result => result.json())
  .then(logs => logs
    .map(log => ({
      ...log,
      _arrivedAt: moment(log._arrivedAt)
    }))
    .sort((a, b) => b._arrivedAt.diff(a._arrivedAt))
  )
  .then(logs => dispatch(receiveFetchLog(logs)))
  .catch(err => console.error(err));

const fetchApiData = (dispatch) =>
  SERVICES.forEach(service =>
    fetch(`${API_HOST}/api/${service}?limit=1&sort=-_arrivedAt`)
    .then(result => result.json())
    .then(data => ({
      ...data[0],
      _arrivedAt: moment(data[0]._arrivedAt)
    }))
    .then(data => dispatch(receiveFetchApi(service, data)))
    .catch(err => console.error(err))
  );

export const configure = (dispatch) => {
  fetchLogs(dispatch);
  fetchApiData(dispatch);

  socket.on('log',
    data => dispatch(receiveSocketLog({
      ...data,
      _arrivedAt: moment(data._arrivedAt)
    })
  ));

  SERVICES.forEach(service =>
    socket.on(service,
      data => dispatch(receiveSocketApi(service, {
        ...data,
        _arrivedAt: moment(data._arrivedAt)
      }))
    )
  );
};

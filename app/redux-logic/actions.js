import {
  FETCH_API_RECEIVE,
  SOCKET_API_RECEIVE,
  FETCH_LOG_RECEIVE,
  SOCKET_LOG_RECEIVE,
  SOCKET_NOTIFY_RECEIVE
} from './constants';

export const receiveFetchApi = (service, data) => ({
  type: FETCH_API_RECEIVE,
  service,
  data
});

export const receiveSocketApi = (service, data) => ({
  type: SOCKET_API_RECEIVE,
  service,
  data
});

export const receiveFetchLog = (data) => ({
  type: FETCH_LOG_RECEIVE,
  data
});

export const receiveSocketLog = (data) => ({
  type: SOCKET_LOG_RECEIVE,
  data
});

export const receiveSocketNotify = (data) => ({
  type: SOCKET_NOTIFY_RECEIVE,
  data
});

import { WEBSOCKET_CONNECT, WEBSOCKET_TOGGLE } from './action-types';

export function webSocketConnect() {
  return {
    type: WEBSOCKET_CONNECT,
  };
}

export function webSocketToggle() {
  return {
    type: WEBSOCKET_TOGGLE,
  }
}

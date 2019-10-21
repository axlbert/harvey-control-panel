import ConnectionStatus from './connection-status.enum';
import {
  HANDLE_WEBSOCKET_CONNECT,
  HANDLE_WEBSOCKET_DISCONNECT,
  HANDLE_WEBSOCKET_CONNECTED,
  HANDLE_WEBSOCKET_DISCONNECTED,
  HANDLE_WEBSOCKET_MESSAGE,
} from './action-types';

const initialState = {
  status: ConnectionStatus.OFFLINE,
  message: null,
};

export default function controlServer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_WEBSOCKET_CONNECT: {
      return Object.assign({}, state, {
        status: ConnectionStatus.CONNECTING,
      });
    }
    case HANDLE_WEBSOCKET_CONNECTED: {
      return Object.assign({}, state, {
        status: ConnectionStatus.ONLINE,
      });
    }
    case HANDLE_WEBSOCKET_DISCONNECT: {
      return Object.assign({}, state, {
        status: ConnectionStatus.DISCONNECTING,
      });
    }
    case HANDLE_WEBSOCKET_DISCONNECTED: {
      return Object.assign({}, state, {
        status: ConnectionStatus.OFFLINE,
      });
    }
    case HANDLE_WEBSOCKET_MESSAGE: {
      return Object.assign({}, state, {
        message: action.message,
      });
    }
    default: return state;
  }
}

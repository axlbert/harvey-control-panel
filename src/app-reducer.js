import { WEBSOCKET_CONNECT, WEBSOCKET_DISCONNECT } from './action-types';

const initialState = {
  webSocketReadyState: 3,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case WEBSOCKET_CONNECT: {
      return Object.assign({}, state, {
        webSocketReadyState: 1,
      });
    }
    case WEBSOCKET_DISCONNECT: {
      return Object.assign({}, state, {
        webSocketReadyState: 3,
      });
    }
    default: return state;
  }
}

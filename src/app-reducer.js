import { WEBSOCKET_CONNECT, WEBSOCKET_DISCONNECT, WEBSOCKET_TOGGLE } from './action-types';

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
    case WEBSOCKET_TOGGLE: {
      const newReadyState = state.webSocketReadyState === 3 ? 1 : 3;
      return Object.assign({}, state, {
        webSocketReadyState: newReadyState,
      });
    }
    default: return state;
  }
}

import {
  HANDLE_WEBSOCKET_CONNECT,
  HANDLE_WEBSOCKET_DISCONNECT,
  HANDLE_WEBSOCKET_CONNECTED,
  HANDLE_WEBSOCKET_DISCONNECTED,
  HANDLE_WEBSOCKET_MESSAGE,
} from './action-types';
import WebSocketMock from './websocket-mock';

let socket = null;

export function websocketConnect() {
  if (socket) return {
    type: null,
  };
  return dispatch => {
    dispatch(handleWebsocketConnect());

    //socket = new WebSocket('ws://localhost:3001');
    socket = new WebSocketMock('DUMMY_URL');
    console.log('\tOpening readyState:', socket.readyState);

    socket.addEventListener('open', () => {
      console.log('\tOpened readyState:', socket.readyState);
      dispatch(handleWebsocketConnected());
    });

    socket.addEventListener('message', e => {
      dispatch(handleWebsocketMessage(e.data));
    });

    socket.addEventListener('close', (s, e) => {
      console.log('WebSocket connection closed.');
      console.log('\tClosed readyState:', socket.readyState);
      socket = null;
      dispatch(handleWebsocketDisconnected());
    });
  }
}

export function websocketDisconnect() {
  if (!socket) return {
    type: null,
  };
  return dispatch => {
    dispatch(handleWebsocketDisconnect());
    socket.close();
    console.log('\tClosing readyState:', socket.readyState);
  }
}

export function websocketSend(message) {
  if (!socket) return {
    type: null,
  };
  socket.send(message);
  return {
    type: null,
  }
}

//
// Handler actions.
//
function handleWebsocketConnect() {
  return {
    type: HANDLE_WEBSOCKET_CONNECT,
  };
}
function handleWebsocketConnected() {
  return {
    type: HANDLE_WEBSOCKET_CONNECTED,
  };
}
function handleWebsocketDisconnect() {
  return {
    type: HANDLE_WEBSOCKET_DISCONNECT,
  };
}
function handleWebsocketDisconnected() {
  return {
    type: HANDLE_WEBSOCKET_DISCONNECTED,
  };
}
function handleWebsocketMessage(message) {
  return {
    type: HANDLE_WEBSOCKET_MESSAGE,
    message,
  };
}

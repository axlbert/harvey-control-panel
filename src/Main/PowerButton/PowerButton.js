import React from 'react';

import './PowerButton.css';
import red from './onoff-red.png';
import yellow from './onoff-yellow.png';
import green from './onoff-green.png';

export default function PowerButton({ status, onConnect, onDisconnect }) {
  function getButtonImage() {
    switch (status) {
      case 1:
      case 3: return yellow;
      case 2: return green;
      default: return red;
    }
  }

  function handleClick() {
    switch (status) {
      case 0: {
        onConnect();
        break;
      }
      case 2: {
        onDisconnect();
        break;
      }
      default: return;
    }
  }

  return (
    <button className="PowerButton" onClick={handleClick}>
      <img
        className="PowerButton-Image"
        src={getButtonImage()}
        alt="On/Off"
      />
    </button>
  );
}

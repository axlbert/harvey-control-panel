import React from 'react';

import './PowerButton.css';
import red from './onoff-red.png';
import yellow from './onoff-yellow.png';
import green from './onoff-green.png';

export default function PowerButton({ status, onClick }) {
  function getButtonImage() {
    switch (status) {
      case 1: return yellow;
      case 2: return green;
      default: return red;
    }
  }

  return (
    <button className="PowerButton" onClick={onClick}>
      <img
        className="PowerButton-Image"
        src={getButtonImage()}
        alt="On/Off"
      />
    </button>
  );
}

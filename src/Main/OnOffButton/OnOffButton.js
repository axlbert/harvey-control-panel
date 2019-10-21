import React from 'react';

import './OnOffButton.css';
import green from './on-off-green.png';
import greenLarge from './on-off-green-large.png';
import redLarge from './on-off-red-large.png';
import gray from './on-off-gray.png';
import yellow from './onoff-yellow.png';

export default function OnOffButton({ large, active, pending, onClick }) {
  function getButtonImage() {
    if (large) {
      if (active) {
        return greenLarge;
      } else if (pending) {
        return yellow;
      } else {
        return redLarge;
      }
    } else {
      if (active) {
        return green;
      } else if (pending) {
        return yellow;
      } else {
        return gray;
      }
    }
    /*if (active) {
      return large ? greenLarge : green;
    } else {
      return large ? redLarge : gray;
    }*/
  }

  const buttonClassName = `OnOffButton ${large && 'OnOffButton_large'}`;
  return (
    <button className={buttonClassName} onClick={onClick}>
      <img
        className="OnOffButton-Image"
        src={getButtonImage()}
        alt="On/Off"
      />
    </button>
  );
}

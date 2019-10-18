import React from 'react';

import './OnOffButton.css';
import green from './on-off-green.png';
import greenLarge from './on-off-green-large.png';
import onOffRed from './on-off-red.png';
import gray from './on-off-gray.png';

export default function OnOffButton({ large, active, onClick }) {
  function getButtonImage() {
    return active ? green : gray;
    //return large ? greenLarge : green;
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

import React from 'react';

import './OnOffButton.css';
import green from './on-off-green.png';
import greenLarge from './on-off-green-large.png';
import onOffRed from './on-off-red.png';
import onOffGray from './on-off-gray.png';

export default function OnOffButton({ large }) {
  function handleClick() {
    console.log('On/Off clicked.');
  }

  function getButtonImage() {
    return large ? greenLarge : green;
  }

  const buttonClassName = `OnOffButton ${large && 'OnOffButton_large'}`;
  return (
    <button className={buttonClassName} onClick={handleClick}>
      <img
        className="OnOffButton-Image"
        src={getButtonImage()}
        alt="On/Off"
      />
    </button>
  );
}

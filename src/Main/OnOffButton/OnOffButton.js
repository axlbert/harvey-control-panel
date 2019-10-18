import React from 'react';

import './OnOffButton.css';
import onOffGreen from './on-off-green.png';
import onOffRed from './on-off-red.png';
import onOffGray from './on-off-gray.png';

export default function OnOffButton({ large }) {
  function handleClick() {
    console.log('On/Off clicked.');
  }

  const buttonClassName = `OnOffButton ${large && 'OnOffButton_large'}`;
  return (
    <button className={buttonClassName} onClick={handleClick}>
      <img className="OnOffButton-Image" src={onOffGreen} alt="On/Off" />
    </button>
  );
}

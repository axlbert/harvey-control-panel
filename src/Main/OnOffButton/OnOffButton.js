import React from 'react';

import './OnOffButton.css';
import onOffGreen from './on-off-green.png';

export default function OnOffButton() {
  return (
    <button className="OnOffButton">
      <img className="OnOffButton-Image" src={onOffGreen} alt="On/Off" />
    </button>
  );
}

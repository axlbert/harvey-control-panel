import React from 'react';

import './PrimaryControls.css';
import Directions from './Directions/Directions';

import onOff from './on-off.png';

export default function PrimaryControls() {
  return (
    <div className="PrimaryControls">
      <img src={onOff} alt="onOff" />
      <div>Auto-Steer</div>
      <Directions />
    </div>
  );
}

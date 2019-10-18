import React from 'react';

import './PrimaryControls.css';
import Directions from './Directions/Directions';

import ConnectedOnOffButton from '../OnOffButton/ConnectedOnOffButton';

export default function PrimaryControls() {
  return (
    <div className="PrimaryControls">
      <ConnectedOnOffButton large />
      <div>Auto-Steer</div>
      <Directions />
    </div>
  );
}

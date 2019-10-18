import React from 'react';

import './PrimaryControls.css';
import ConnectedOnOffButton from '../OnOffButton/ConnectedOnOffButton';
import AutoSteer from './AutoSteer/AutoSteer';
import Directions from './Directions/Directions';

export default function PrimaryControls() {
  return (
    <div className="PrimaryControls">
      <ConnectedOnOffButton large />

      <AutoSteer />

      <Directions />
    </div>
  );
}

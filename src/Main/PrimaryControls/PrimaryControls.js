import React from 'react';

import './PrimaryControls.css';
import ConnectedOnOffButton from '../OnOffButton/ConnectedOnOffButton';
import AutoSteer from './AutoSteer/AutoSteer';
import Directions from './Directions/Directions';
import ConnectedPowerButton from '../PowerButton/ConnectedPowerButton';

export default function PrimaryControls() {
  return (
    <div className="PrimaryControls">
      <ConnectedPowerButton />

      <AutoSteer />

      <Directions />
    </div>
  );
}

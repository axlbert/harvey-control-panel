import React from 'react';

import './PrimaryControls.css';
import ConnectedOnOffButton from '../OnOffButton/ConnectedOnOffButton';
import AutoSteer from './AutoSteer/AutoSteer';
import Directions from './Directions/Directions';
import PowerButton from '../PowerButton/PowerButton';

export default function PrimaryControls() {
  return (
    <div className="PrimaryControls">
      <PowerButton status={0} />

      <AutoSteer />

      <Directions />
    </div>
  );
}

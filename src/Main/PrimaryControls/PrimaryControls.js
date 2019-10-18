import React from 'react';

import './PrimaryControls.css';
import Directions from './Directions/Directions';

import OnOffButton from '../OnOffButton/OnOffButton';

export default function PrimaryControls() {
  return (
    <div className="PrimaryControls">
      <OnOffButton />
      <div>Auto-Steer</div>
      <Directions />
    </div>
  );
}

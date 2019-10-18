import React from 'react';

import './SliderPanel.css';
import SliderControl from './SliderControl/SliderControl';

export default function SliderPanel() {
  return (
    <div className="SliderPanel">
      <SliderControl />
      <SliderControl />
      <SliderControl />
    </div>
  );
}

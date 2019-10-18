import React from 'react';

import './SliderPanel.css';
import SliderControl from './SliderControl/SliderControl';

export default function SliderPanel() {
  return (
    <div className="SliderPanel">
      <SliderControl name="Belt I" currentValue={25} />
      <SliderControl name="Belt II" currentValue={40} />
      <SliderControl name="Intake" currentValue={5} />
    </div>
  );
}

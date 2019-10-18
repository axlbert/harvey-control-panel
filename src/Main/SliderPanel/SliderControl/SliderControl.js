import React from 'react';

import './SliderControl.css';
import StyledSlider from './StyledSlider';

import onOff from './on-off-small.png';

export default function SliderControl() {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <div className="SliderControl">
      <img src={onOff} />
      <div className="SliderControl-Separator"></div>
      <div className="SliderControl-Name">Belt 1</div>
      <div className="SliderControl-SliderContainer">
        <div className="SliderControl-Mark">-</div>
        <StyledSlider value={value} onChange={handleChange} track={false} />
        <div className="SliderControl-Mark">+</div>
      </div>
    </div>
  );
}

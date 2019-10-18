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
    <div className="Belt">
      <img src={onOff} />
      <div className="Belt-Separator"></div>
      <div className="Belt-Name">Belt 1</div>
      <div className="Belt-SliderContainer">
        <div className="Belt-SliderMark">-</div>
        <StyledSlider value={value} onChange={handleChange} track={false} />
        <div className="Belt-SliderMark">+</div>
      </div>
    </div>
  );
}

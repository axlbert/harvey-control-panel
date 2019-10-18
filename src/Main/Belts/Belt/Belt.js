import React from 'react';
import { Slider } from '@material-ui/core';

import './Belt.css';

import onOff from './on-off-small.png';

export default function Belt() {
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
        <Slider value={value} onChange={handleChange} />
        <div className="Belt-SliderMark">+</div>
      </div>
    </div>
  );
}

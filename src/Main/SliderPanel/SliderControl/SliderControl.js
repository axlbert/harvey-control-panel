import React from 'react';
import { Slider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import './SliderControl.css';

import onOff from './on-off-small.png';
import thumb from './thumb.png';

const CssSlider = withStyles({
  root: {
    '& .MuiSlider-thumb': {
      width: 30,
      height: 30,
      marginTop: -14,
      marginLeft: -14,
      color: 'transparent',
      backgroundImage: `url(${thumb})`,
      backgroundRepeat: 'no-repeat',
    },
    '& .MuiSlider-rail': {
      height: 12,
      marginTop: -5,
      color: 'rgb(38, 36, 47)',
    },
  },
})(Slider);

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
        <CssSlider value={value} onChange={handleChange} track={false} />
        <div className="Belt-SliderMark">+</div>
      </div>
    </div>
  );
}

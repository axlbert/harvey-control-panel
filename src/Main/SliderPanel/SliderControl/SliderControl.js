import React from 'react';

import './SliderControl.css';
import StyledSlider from './StyledSlider';
import ConnectedOnOffButton from '../../OnOffButton/ConnectedOnOffButton';

export default function SliderControl({ name, currentValue }) {
  const [value, setValue] = React.useState(currentValue);

  const handleChange = (event, newValue) => {
    //console.log(newValue);
    setValue(newValue);
  };

  return (
    <div className="SliderControl">
      <ConnectedOnOffButton />
      <div className="SliderControl-Separator"></div>
      <div className="SliderControl-Name">{ name }</div>
      <div className="SliderControl-SliderContainer">
        <div className="SliderControl-Mark">-</div>
        <StyledSlider value={value} onChange={handleChange} track={false} />
        <div className="SliderControl-Mark">+</div>
      </div>
    </div>
  );
}

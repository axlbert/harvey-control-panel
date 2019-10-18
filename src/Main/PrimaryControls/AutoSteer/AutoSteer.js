import React, { useState } from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import gray from './thumb-gray.png';
import green from './thumb-green.png';

const StyledSwitch = withStyles({
  root: {
    width: 85,
    height: 40,
  },
  track: {
    height: 21,
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: 'rgb(38, 36, 47)',
  },
})(Switch);

const thumbStyles = {
  width: 37,
  height: 37,
  marginTop: -6,
};

export default function AutoSteer() {
  const [active, setActive] = useState(false);

  function handleToggle() {
    setActive(x => !x);
  }

  function SwitchControl() {
    return <StyledSwitch
      checked={active}
      onChange={handleToggle}
      icon={<img src={gray} style={thumbStyles} alt="Off" />}
      checkedIcon={<img src={green} style={thumbStyles} alt="On" />}
    />
  }

  return (
    <div>
      <FormControlLabel
        control={<SwitchControl />}
        label="Auto-Steer"
      />
    </div>
  );
}

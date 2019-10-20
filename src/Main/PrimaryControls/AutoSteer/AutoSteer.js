import React, { useState } from 'react';

import CustomSwitch from './CustomSwitch';

export default function AutoSteer() {
  const [active, setActive] = useState(false);

  function handleToggle() {
    setActive(x => !x);
  }

  return (
    <CustomSwitch
      label="Auto-Steer"
      checked={active}
      onChange={handleToggle}
    />
  );
}

import React, { useState } from 'react';

import OnOffButton from './OnOffButton';

export default function ConnectedOnOffButton({ ...props }) {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(x => !x);
  }

  return <OnOffButton
    pending={active}
    onClick={handleClick}
    {...props}
  />;
}

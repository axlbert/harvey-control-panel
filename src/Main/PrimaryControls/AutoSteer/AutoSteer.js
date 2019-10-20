import React, { useState } from 'react';

import './AutoSteer.css';

import gray from './thumb-gray.png';
import green from './thumb-green.png';

export default function AutoSteer() {
  const [active, setActive] = useState(false);

  function handleToggle() {
    setActive(x => !x);
  }

  const thumbClassName = 
    `CustomSwitch-Thumb ${active && 'CustomSwitch-Thumb_active'}`;
  const thumbImgSrc = active ? green : gray;
  return (
    <div>
      <div className="CustomSwitch" onClick={handleToggle}>
        <div className="CustomSwitch-Track">
          <img
            className={thumbClassName}
            src={thumbImgSrc}
            alt="Toggle Auto-Steer"
          />
        </div>
        <div className="CustomSwitch-Label">Auto-Steer</div>
      </div>
    </div>
  );
}

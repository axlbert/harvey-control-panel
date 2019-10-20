import React from 'react';

import './CustomSwitch.css';
import gray from './thumb-gray.png';
import green from './thumb-green.png';

export default function CustomSwitch({ label, checked, onChange }) {
  const thumbClassName = 
    `CustomSwitch-Thumb ${checked && 'CustomSwitch-Thumb_active'}`;
  const thumbImgSrc = checked ? green : gray;
  return (
    <div className="CustomSwitch" onClick={onChange}>
      <div className="CustomSwitch-Track">
        <img
          className={thumbClassName}
          src={thumbImgSrc}
          alt={`Toggle ${label}`}
        />
      </div>
      <div className="CustomSwitch-Label">{ label }</div>
    </div>
  );
}

import React from 'react';

import './Belt.css';

import onOff from './on-off-small.png';

export default function Belt() {
  return (
    <div className="Belt">
      <img src={onOff} />
      <div>Belt 1</div>
      <div>Slider</div>
    </div>
  );
}

import React from 'react';

import './VideoControls.css';
import ArrowButton from '../ArrowButton/ArrowButton';

export default function VideoControls() {
  return (
    <div className="VideoControls">
      <ArrowButton direction="left" />
      <span style={{ fontWeight: 300 }}>Camera Front</span>
      <ArrowButton direction="right" />
    </div>
  );
}

import React from 'react';

import './VideoControls.css';
import ArrowButton from '../ArrowButton/ArrowButton';

export default function VideoControls() {
  return (
    <div className="VideoControls">
      <ArrowButton />
      <span style={{ fontWeight: 300 }}>Camera Front</span>
      <ArrowButton />
    </div>
  );
}

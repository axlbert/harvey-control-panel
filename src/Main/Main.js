import React from 'react';

import './Main.css';
import SliderPanel from './SliderPanel/SliderPanel';
import Video from './Video/Video';
import VideoControls from './VideoControls/VideoControls';
import PrimaryControls from './PrimaryControls/PrimaryControls';

export default function Main() {
  return (
    <main className="Main">
      <div className="Main-Inner">
        <div className="Main-Left">
          <SliderPanel />
          <PrimaryControls />
        </div>
        <div className="Main-Right">
          <div style={{ marginBottom: '.5rem', fontWeight: 300 }}>GPS Map</div>
          <Video />
          <div className="Main-VideoSeparator"></div>
          <Video />
          <div style={{ marginTop: '1rem' }}></div>
          <VideoControls />
        </div>
      </div>
    </main>
  );
}

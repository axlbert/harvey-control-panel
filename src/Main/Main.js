import React from 'react';

import './Main.css';
import Belts from './Belts/Belts';
import Video from './Video/Video';

export default function Main() {
  return (
    <main className="Main">
      <div className="Main-Inner">
        <div className="Main-Left">
          <Belts />
        </div>
        <div className="Main-Right">
          <div>GPS Map</div>
          <Video />
          <div className="Main-VideoSeparator"></div>
          <Video />
        </div>
      </div>
    </main>
  );
}

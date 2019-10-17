import React from 'react';
import { Container } from '@material-ui/core';

import './Main.css';
import onOff from './on-off.png';

export default function Main() {
  return (
    <main className="Main">
      <Container>
        <div className="Main-Inner">
          <div className="Main-Left">
            <div className="Belts">Belts</div>
            <div className="Main-Controls">
              <img src={onOff} alt="On/Off" />
            </div>
          </div>
          <div className="Main-Right">
            <span className="Main-Text">GPS Map</span>
            <div className="Main-VideoWrapper"></div>
            <div className="Main-VideoSeparator"></div>
            <div className="Main-VideoWrapper"></div>
          </div>
        </div>
      </Container>
    </main>
  );
}

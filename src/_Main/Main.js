import React from 'react';
import { Container } from '@material-ui/core';

import './Main.css';
import onOff from './on-off.png';
import arrowButton from './arrow-button.png';

export default function Main() {
  return (
    <main className="Main">
      <Container>
        <div className="Main-Inner">
          <div className="Main-Left">
            <div className="Belts">Belts</div>
            <div className="Main-Controls" style={{ marginTop: '2rem' }}>
              <img src={onOff} alt="On/Off" />
            </div>
          </div>
          <div className="Main-Right">
            <div className="Main-Text" style={{ marginBottom: '.5rem' }}>
              GPS Map
            </div>
            <div className="Main-VideoWrapper"></div>
            <div className="Main-VideoSeparator"></div>
            <div className="Main-VideoWrapper"></div>
            <div className="Main-VideoControls">
              <img src={arrowButton} alt="Prev" />
              <span className="Main-Text">Camera Front</span>
              <img src={arrowButton} alt="Next" />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

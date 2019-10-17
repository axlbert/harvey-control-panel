import React from 'react';

import './Main.css';
import Belts from './Belts/Belts';

export default function Main() {
  return (
    <main className="Main">
      <div className="Main-Inner">
        <div className="Main-Left">
          <Belts />
        </div>
        <div className="Main-Right">Right</div>
      </div>
    </main>
  );
}

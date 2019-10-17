import React from 'react';

import './Header.css';

export default function Header() {
  return (
    <header className="Header">
      <div className="Header-Inner">
        <span className="Header-Brand">harvey.one</span>
        <a href="/" className="Header-LogoutLink">Ausloggen</a>
      </div>
    </header>
  );
}

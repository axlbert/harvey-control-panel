import React from 'react';

import './LoginScreen.css';

export default function LoginScreen() {
  return (
    <div className="LoginScreen">
      <div className="LoginScreen-Card">
        <div className="LoginScreen-Heading">Willkommen</div>
        <form className="LoginForm">
          <div className="LoginForm-InputContainer" style={{ marginTop: '3rem' }}>
            <label className="LoginForm-InputLabel">e-mail</label>
            <input className="LoginForm-Input" />
          </div>
        </form>
      </div>
    </div>
  );
}

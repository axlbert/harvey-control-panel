import React from 'react';

import './LoginScreen.css';

export default function LoginScreen() {
  return (
    <div className="LoginScreen">
      <div className="LoginScreen-Card">
        <div className="LoginScreen-Heading">Willkommen</div>
        <form className="LoginForm">
          <div className="LoginForm-InputContainer">
            <label>Email</label>
            <input />
          </div>
        </form>
      </div>
    </div>
  );
}

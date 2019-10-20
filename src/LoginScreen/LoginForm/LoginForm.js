import React from 'react';

import './LoginForm.css';
import envelope from './envelope.png';
import lock from './lock.png';

export default function LoginForm() {
  return (
    <form className="LoginForm">
      <div className="LoginForm-InputContainer" style={{ marginTop: '3rem' }}>
        <label className="LoginForm-InputLabel">
          <img src={envelope} alt="Envelope" />
          <span style={{ marginLeft: '.75rem' }}>e-mail</span>
        </label>
        <input className="LoginForm-Input" />
      </div>
      <div className="LoginForm-InputContainer" style={{ marginTop: '2rem' }}>
        <label className="LoginForm-InputLabel">
          <img src={lock} alt="Lock" />
          <span style={{ marginLeft: '.75rem' }}>passwort</span>
        </label>
        <input className="LoginForm-Input" />
      </div>
    </form>
  );
}

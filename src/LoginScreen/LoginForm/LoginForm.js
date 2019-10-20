import React from 'react';

import './LoginForm.css';
import envelope from './envelope.png';
import lock from './lock.png';
import button from './button.png';

export default function LoginForm() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted');
  }

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <div className="LoginForm-InputContainer" style={{ marginTop: '3rem' }}>
        <label className="LoginForm-InputLabel" htmlFor="email">
          <img src={envelope} alt="Envelope" style={{ marginTop: 3 }} />
          <span className="LoginForm-InputLabelText">
            e-mail
          </span>
        </label>
        <input
          className="LoginForm-Input"
          type="email"
          name="email"
          placeholder="hello@schmiede.one"
        />
      </div>

      <div className="LoginForm-InputContainer" style={{ marginTop: '1.95rem' }}>
        <label className="LoginForm-InputLabel" htmlFor="password">
          <img src={lock} alt="Lock" />
          <span className="LoginForm-InputLabelText">
            passwort
          </span>
        </label>
        <input
          className="LoginForm-Input"
          type="password"
          name="password"
          placeholder="************"
        />
      </div>

      <button className="LoginForm-SubmitButton" type="submit">
        Einloggen
      </button>
    </form>
  );
}

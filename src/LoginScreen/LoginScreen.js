import React from 'react';

import './LoginScreen.css';
import LoginForm from './LoginForm/LoginForm';

export default function LoginScreen() {
  return (
    <div className="LoginScreen">
      <div className="LoginScreen-Card">
        <div className="LoginScreen-Heading">Willkommen</div>
        <LoginForm />
      </div>
    </div>
  );
}

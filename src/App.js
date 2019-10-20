import React from 'react';

import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import LoginScreen from './LoginScreen/LoginScreen';

function PanelScreen() {
  return (
    <div>
      <div style={{ margin: '1rem' }}>
        <Main />
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <LoginScreen />
    </div>
  );
}

export default App;

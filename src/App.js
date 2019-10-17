import React from 'react';

import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ margin: '1rem' }}>
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import { Container } from '@material-ui/core';

import './App.css';
import Footer from './Footer/Footer';
import Main from './Main/Main';

function App() {
  return (
    <div className="App">
      <header className="App-Header">
        <Container>harvey.one</Container>
      </header>
      <Main />
      <Footer />
    </div>
  );
}

export default App;

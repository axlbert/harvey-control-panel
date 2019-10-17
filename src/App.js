import React from 'react';
import { Container } from '@material-ui/core';

import './App.css';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-Header">
        <Container>harvey.one</Container>
      </header>
      <main className="App-Main">
        <Container>Main</Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;

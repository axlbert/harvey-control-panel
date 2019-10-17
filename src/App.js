import React from 'react';
import { Container } from '@material-ui/core';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-Header">
        <Container>harvey.one</Container>
      </header>
      <main className="App-Main">
        <Container>Main</Container>
      </main>
      <footer className="App-Footer">
        <Container>
          Footer
          <table>
            <thead>
              <tr>
                <th>Geschwindigkeit</th>
                <th>Bereich</th>
                <th>Benzin</th>
                <th>Temperatur</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>5,65 km/h</td>
                <td>0,2  ha/h</td>
                <td>10 lt</td>
                <td>95 °C</td>
              </tr>
            </tbody>
          </table>
        </Container>
      </footer>
    </div>
  );
}

export default App;

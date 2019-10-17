import React from 'react';

import './Footer.css';

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-Inner">
        <table className="Footer-Table">
          <thead>
            <tr>
              <th className="Footer-Th">Geschwindigkeit</th>
              <th className="Footer-Th">Bereich</th>
              <th className="Footer-Th">Benzin</th>
              <th className="Footer-Th">Temperatur</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="Footer-Td">
                <span>5,65</span>
                {' '}
                <span className="Footer-Td_extraLight">km/h</span>
              </td>
              <td className="Footer-Td">
                <span>0,2</span>
                {' '}
                <span className="Footer-Td_extraLight">ha/h</span>
              </td>
              <td className="Footer-Td">
                <span>10</span>
                {' '}
                <span className="Footer-Td_extraLight">lt</span>
              </td>
              <td className="Footer-Td">
                <span>95</span>
                {' '}
                <span className="Footer-Td_extraLight">°C</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </footer>
  );
}

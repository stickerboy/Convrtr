import React from 'react';
import Decoder from './decoder';
import './css/app.scss';
import './css/buttons.scss';

function Convrtr() {
  return (
    <React.Fragment>
      <header className="app--header">
        <span className="app--title">Convrtr</span>
        <span className="app--sub-title">For everlost and Gorllo's</span>
      </header>
      <main className="app--wrapper">
        <div className="app--grid">
          <Decoder name="Text" type="encode" />
          <Decoder name="Binary" type="decode" />
          <Decoder name="Hex" type="decode" />
          <Decoder name="Base64" type="decode" />
          <Decoder name="Decimal" type="decode" />
          <Decoder name="Reverse" type="decode" />
          <Decoder name="Rot13" type="decode" />
          <Decoder name="Morse" type="decode" />
          <Decoder name="Morsenary" type="decode" />
        </div>
      </main>
    </React.Fragment>
  );
}

export default Convrtr;

import React from 'react';
import './css/decoder.scss';
import './css/buttons.scss';

const Decoder = ({name, type}) => {
  return (
    <div className="grid-item">
      <span className="grid-item--header">{name}</span>
      <textarea rows="9"></textarea>
      <div className="toolbar">
        <button className={`button button--${type}`}>{type}</button>
        <div className="button-group">
          <button className="button button--secondary">D</button>
          <button className="button button--secondary">C</button>
        </div>
      </div>
    </div>
  );
}

export default Decoder;

import React, { useState } from 'react';
import './ColorConverter.css'; 

const ColorConverter = () => {
  const [hex, setHex] = useState('#');
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    let value = event.target.value;
    if (!value.startsWith('#')) {
      value = '#' + value.replace(/#/g, '');
    }
    if (value.length > 7) {
      value = value.slice(0, 7);
    }
    setHex(value);

    if (value.length === 7) {
      if (/^#[0-9A-F]{6}$/i.test(value)) {
        const r = parseInt(value.substr(1, 2), 16);
        const g = parseInt(value.substr(3, 2), 16);
        const b = parseInt(value.substr(5, 2), 16);
        setBackgroundColor(`rgb(${r}, ${g}, ${b})`);
        setError('');
      } else {
        setError('Ошибка: Неправильный HEX код');
        setBackgroundColor('red');
      }
    } else {
      setError('');
      setBackgroundColor('white');
    }
  };

  return (
    <div className="container" style={{ backgroundColor }}>
      <div className="input-box">
        <input
          type="text"
          value={hex}
          onChange={handleChange}
          placeholder="#"
        />
      </div>
      {error ? (
        <div className="error-box">{error}</div>
      ) : (
        hex.length > 1 && <div className="output-box">Цвет: {backgroundColor}</div>
      )}
    </div>
  );
};

export default ColorConverter;

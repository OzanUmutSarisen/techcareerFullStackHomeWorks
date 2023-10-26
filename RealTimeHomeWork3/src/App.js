import React, { useState } from 'react';

function Rectangle() {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  const handleDrawRectangle = () => {
    setWidth(Number(document.getElementById('widthInput').value));
    setHeight(Number(document.getElementById('heightInput').value));
  };

  return (
    <div>
      <h2>React Dikdörtgen Çizme</h2>
      <div>
        <label>Genişlik:</label>
        <input type="number" id="widthInput" defaultValue={width} />
      </div>
      <div>
        <label>Yükseklik:</label>
        <input type="number" id="heightInput" defaultValue={height} />
      </div>
      <button onClick={handleDrawRectangle}>Çiz</button>
      <div>
        <svg width={width} height={height}>
          <rect width={width} height={height} fill="blue" />
        </svg>
      </div>
    </div>
  );
}

export default Rectangle;

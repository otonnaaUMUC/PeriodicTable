// src/ElementDetails.js
import React from 'react';

function ElementDetails({ element }) {
  if (!element) return <div>Select an element to see its details.</div>;

  return (
    <div className="element-details">
      <h2>{element.name} ({element.symbol})</h2>
      <p>Atomic Number: {element.atomicNumber}</p>
      <p>Atomic Weight: {element.atomicWeight}</p>
    </div>
  );
}

export default ElementDetails;

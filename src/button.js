import React from 'react';

// Stateless Component
export default function Button({value, onClick}) {
  return <button className="button" onClick={onClick}>{value}</button>
}
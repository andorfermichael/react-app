import React from 'react';

// Controlled Component = value can be get and set
export default function Input({onChange, value}) {
  return <input type="text" value={value} onChange={onChange}/>
}
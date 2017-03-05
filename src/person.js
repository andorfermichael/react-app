import React from 'react';
import Button from './button';

// Stateless Component
export default function Person ({onClick, name}) {
  // React splits this up into further components, Name = static, properties.name = dynamic
  return <p className="person">
    Name: {name}
    <Button value={'-'} onClick={onClick}/>
  </p>
}
Person.propTypes = {
  name: React.PropTypes.string
};
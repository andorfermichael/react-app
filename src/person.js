import React from 'react';
import RemoveButton from './remove-button';

// Stateless Component
export default function Person ({onClick, name}) {
  // React splits this up into further components, Name = static, properties.name = dynamic
  return <p className="person">
    Name: {name}
    <RemoveButton onClick={onClick}/>
  </p>
}
Person.propTypes = {
  name: React.PropTypes.string
};
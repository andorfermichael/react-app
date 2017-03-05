import React from 'react';
import Person from './person';

// Stateless Component
export default function List({onRemoveEntry, entries}) {
  return <div>
    {
      entries.map(
        (entry, index) =>
          <Person onClick={onRemoveEntry.bind(null, entry)} key={entry.id} name={entry.name}/>
      )
    }
  </div>
}
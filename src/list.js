import React from 'react';
import Person from './person';

// Stateless Component
export default function List(props) {
  return <div>
    {
      props.entries.map(
        (entry, index) =>
          <Person onRemoveEntry={() => {return props.onRemoveEntry && props.onRemoveEntry(entry)}}
                  onEditEntry={() => {return props.onEditEntry && props.onEditEntry(entry)}}
                  onSubmitEntryEdit={() => {return props.onSubmitEntryEdit && props.onSubmitEntryEdit(entry)}}
                  updateCurrentEditName={props.updateCurrentEditName}
                  props={props}
                  key={entry.id}
                  entryID={entry.id}
                  name={entry.name}
          />
      )
    }
  </div>
}
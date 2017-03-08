import React from 'react';
import Person from './person';

// Stateless Component
export default function List({onRemoveEntry, onEditEntry, onSubmitEntryEdit, updateCurrentEditName, currentEditName, editingID, entries}) {
  return <div>
    {
      entries.map(
        (entry, index) =>
          <Person onRemoveEntry={() => {return onRemoveEntry && onRemoveEntry(entry)}}
                  onEditEntry={() => {return onEditEntry && onEditEntry(entry)}}
                  onSubmitEntryEdit={() => {return onSubmitEntryEdit && onSubmitEntryEdit(entry)}}
                  updateCurrentEditName={updateCurrentEditName}
                  currentEditName={currentEditName}
                  editingID={editingID}
                  key={entry.id}
                  entryID={entry.id}
                  name={entry.name}
          />
      )
    }
  </div>
}
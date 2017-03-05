import React from 'react';
import Button from './button';
import Input from './input';

// Stateless Component
export default function Person ({onRemoveEntry, onEditEntry, onSubmitEntryEdit, updateCurrentEditName, currentEditName, entryID, editingID, name}) {
  // React splits this up into further components, Name = static, properties.name = dynamic
  
  if (editingID === entryID) {
    return <div>
      <Input value={currentEditName} onChange={updateCurrentEditName}/> <Button value={'save'} onClick={onSubmitEntryEdit}/>
    </div>
  } else {
    return <p className="person">
      {name}
      <Button value={'remove'} onClick={onRemoveEntry}/>
      <Button value={'edit'} onClick={onEditEntry}/>
    </p>
  }
}
Person.propTypes = {
  name: React.PropTypes.string
};
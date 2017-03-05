import React from 'react';
import Button from './button';
import Input from './input';

// Stateless Component
export default function Person ({onRemoveEntry, onEditEntry, onSubmitEntryEdit, updateCurrentEditName, currentEditName, entryID, editingID, name}) {
  // React splits this up into further components, Name = static, properties.name = dynamic

  if (editingID === entryID) {
    return <div className="person">
      <Input value={currentEditName} onChange={updateCurrentEditName}/> <Button value={'save'} onClick={onSubmitEntryEdit}/>
    </div>
  } else {
    return <div className="person">
      <p className="person-name">{name}</p>
      <div className="person-actions">
        <Button value={'remove'} onClick={onRemoveEntry}/>
        <Button value={'edit'} onClick={onEditEntry}/>
      </div>
    </div>
  }
}
Person.propTypes = {
  name: React.PropTypes.string
};
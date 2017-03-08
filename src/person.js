import React from 'react';
import Button from './button';
import Input from './input';

// Stateless Component
export default function Person (props) {
  if (props.props.editingID === props.entryID) {
    return <div className="person">
        <Input value={props.props.currentEditName} onChange={props.updateCurrentEditName}/> <Button value={'save'} onClick={props.onSubmitEntryEdit}/>
    </div>
  } else {
    return <div className="person">
      <p className="person-name">{props.name}</p>
      <div className="person-actions">
        <Button value={'remove'} onClick={props.onRemoveEntry}/>
        <Button value={'edit'} onClick={props.onEditEntry}/>
      </div>
    </div>
  }
}
Person.propTypes = {
  name: React.PropTypes.string
};
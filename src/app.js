import React from 'react';
import Input from './input';
import Button from './button';
import List from './list';
import {PERSONS} from './persons'

// Statefull Component
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      entries: PERSONS,
      currentID: 13,
      currentName: '',
      currentEditName: '',
      filterValue: '',
      editingID: -1
    }
  }

  updateCurrentName = (e) => {
    this.setState({
      currentName: e.target.value
    })
  };

  updateCurrentEditName = (e) => {
    this.setState({
      currentEditName: e.target.value
    })
  };

  updateFilterValue = (e) => {
    this.setState({
      filterValue: e.target.value
    })
  };

  removeEntry = (item) => {
    const newState = this.state.entries;
    if (newState.indexOf(item) > -1) {
      newState.splice(newState.indexOf(item), 1);
      this.setState({entries: newState})
    }
  };

  editEntry = (item) => {
    //console.log(item.id);
    this.setState({
      currentEditName: item.name,
      editingID: item.id
    })
  };

  submitEntryEdit = (item) => {
    const data = this.state.entries;
    for (let i in data) {
      if (data[i].id === item.id) {
        data[i].name = this.state.currentEditName;
        break; //Stop this loop, we found it!
      }
    }

    this.setState({
      entries: data,
      editingID: -1,
      currentEditName: ''
    })
  };

  render() {
    let filteredEntries = this.state.entries.filter(
      (entry) => {
        return entry['name'].indexOf(this.state.filterValue) !== -1
      }
    );

    return <div>
      <h1>Mike's first react app!</h1>

      <div className="input-components">
        <div className="name-add">
          <p className="input-label">Name:</p>
          <Input value={this.state.currentName} onChange={this.updateCurrentName}/>

          <Button value={'add'} onClick={
            () => {
              if (this.state.currentName !== '') {
                this.setState({
                  entries: [...this.state.entries, {id: this.state.currentID, name: this.state.currentName}],
                  currentID: this.state.currentID + 1,
                  currentName: ''
                })
              }
            }
          }/>
        </div>

        <div className="name-filter">
          <p className="input-label">Filter:</p>
          <Input value={this.state.filterValue} onChange={this.updateFilterValue}/>
        </div>
      </div>

      <div className="list-person">
        <hp className="text-label">Persons:</hp>
        <List onRemoveEntry={this.removeEntry} onEditEntry={this.editEntry} onSubmitEntryEdit={this.submitEntryEdit} updateCurrentEditName={this.updateCurrentEditName} currentEditName={this.state.currentEditName} editingID={this.state.editingID} entries={filteredEntries}/>
      </div>
    </div>
  }
}
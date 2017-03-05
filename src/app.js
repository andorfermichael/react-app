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
      filterValue: ''
    }
  }

  updateCurrentName = (e) => {
    this.setState({
      currentName: e.target.value
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

  render() {
    let filteredEntries = this.state.entries.filter(
      (entry) => {
        return entry['name'].indexOf(this.state.filterValue) !== -1
      }
    );

    return <div>
      <h5>Insert name to add:</h5>
      <Input value={this.state.currentName} onChange={this.updateCurrentName}/>

      <Button value={'+'} onClick={
        () => {
          this.setState({
            entries: [...this.state.entries, {id: this.state.currentID, name: this.state.currentName}],
            currentID: this.state.currentID + 1,
            currentName: ''
          })
        }
      }/>

      <br/>
      <h5>Insert name to filter for:</h5>
      <Input value={this.state.filterValue} onChange={this.updateFilterValue}/>

      <h5>Persons:</h5>
      <List onRemoveEntry={this.removeEntry} entries={filteredEntries}/>
    </div>
  }
}
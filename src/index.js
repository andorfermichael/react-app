import React from 'react';
import ReactDOM from 'react-dom';
import Input from './input';
import './index.css';

// Statefull Component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      entries: ['Mike, Alex, Berni, Daniel, Sepp, Konrad, Magda, Ryan, Seb, Steffi', 'Vera', 'Vikki'],
      inputValue: '',
      filterValue: ''
    }
  }

  updateCurrentValue = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  };

  updateFilterValue = (e) => {
    this.setState({
      filterValue: e.target.value
    })
  };

  removeEntry = (index) => {
    this.setState({
      entries: [...this.state.entries.slice(0, index), ...this.state.entries.slice(index + 1)]
    });
  };

  render() {
    let filteredEntries = this.state.entries.filter(
      (entry) => {
        return entry.indexOf(this.state.filterValue) !== -1
      }
    );

    return <div>
      <h5>Insert name to add:</h5>
      <Input value={this.state.inputValue} onChange={this.updateCurrentValue}/>

      <AddButton onClick={
        () => {
          this.setState({
            entries: [...this.state.entries, this.state.inputValue],
            inputValue: ''
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

// Stateless Component
function List({onRemoveEntry, entries}) {
  return <div>
      {
        entries.map(
          (entry, index) =>
          <Person onClick={onRemoveEntry.bind(null, index)} key={index} name={entry}/>
        )
      }
    </div>
}

// Stateless Component
function AddButton({onClick}) {
  return <button onClick={onClick}>+</button>
}

// Stateless Component
function RemoveButton({onClick}) {
  return <button onClick={onClick}>-</button>
}

// Stateless Component
function Person ({onClick, name}) {
  // React splits this up into further components, Name = static, properties.name = dynamic
  return <div className="person">
    Name: {name}
    <RemoveButton onClick={onClick}/>

  </div>
}
Person.propTypes = {
  name: React.PropTypes.string
};

ReactDOM.render(
  <App />,

  // DOM is rendered into root element
  document.getElementById('root')
);

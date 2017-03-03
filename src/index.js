import React from 'react';
import ReactDOM from 'react-dom';
import Input from './input';
import './index.css';

// Statefull Component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      entries: ['Stefanie', 'Sepp', 'Alex'],
      inputValue: ''
    }
  }

  updateCurrentValue = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  };

  render() {
    return <div>
      <Input value={this.state.inputValue} onChange={this.updateCurrentValue}/>

      <Button onClick={
        () => {
          this.setState({
            entries: [...this.state.entries, this.state.inputValue],
            inputValue: ''
          })
        }
      }/>
      <List entries={this.state.entries}/>
    </div>
  }
}

// Stateless Component
function List({entries}) {
  return <div>
      {
        entries.map(
          (entry, index) =>
          <Person key={index} name={entry}/>)
      }
    </div>
}

// Stateless Component
function Button({onClick}) {
  return <button onClick={onClick}>+</button>
}

// Stateless Component
function Person ({name}) {
  // React splits this up into further components, Name = static, properties.name = dynamic
  return <div className="person">Name: {name}</div>
}
Person.propTypes = {
  name: React.PropTypes.string
};

ReactDOM.render(
  <App />,

  // DOM is rendered into root element
  document.getElementById('root')
);

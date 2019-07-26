import './App.css';

import React from 'react';
import Person from './Person/Person';

class App extends React.Component {

  state = {
    person : {
      name: 'Sai',
      age: 29
    }
  }

  render(){

    const {person} = this.state;

    return (
      <div className="App">
        Initial Commit
        <Person name={person.name} age={person.age}>
          I am Software Engineer
        </Person>
      </div>
    )
  }
}

export default App; 
import './App.css';

import React from 'react';
import Person from './Person/Person';

class App extends React.Component {


  render(){

    return (
      <div className="App">
        Initial Commit
        <Person name="Sai" age="28"/>
        <Person name="Charan" age="27"/>
        <Person name="krishna" age="26">
          <h1>My Content</h1>
        </Person>
        <Person name="Ramu" age="25"/>
      </div>
    )
  }
}

export default App; 
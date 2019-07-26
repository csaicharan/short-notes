import './App.css';

import React from 'react';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      Initial Commit
      <Person name="Sai" age="28"/>
      <Person name="Charan" age="27"/>
      <Person name="krishna" age="26">My Content</Person>
      <Person name="Ramu" age="25"/>
    </div>
  );
}

export default App; 
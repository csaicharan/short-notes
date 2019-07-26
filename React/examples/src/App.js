import './App.css';

import React from 'react';
import Person from './Person/Person';

class App extends React.Component {

  state = {
    person : [
      {
        name: 'Sai',
        age: 29
      },
      {
        name: 'Ramu',
        age: 30
      }
    ],
    address : 'Bangalore, India'
  }

  age = 40;

  onChangeHandler = () => {
    this.setState({
      person : {
        name: 'Ramu',
        age: 90
      }
    }); // Here the state will be merged with the passed state and it won't replace the state
  }

  /**
   * There are two ways of arguments passing from the child
   * 1) binding this to the function and passing arguments as a second parameter
   *    Ex: this.onClickHandlerFromChild.bind(this, person[0]); Arg1: 'this Object', Arg2: 'Parameters'
   * 2) using anonymous arrow function to call the function
   *    Ex: () => this.onClickHandlerFromChild(person[0]);
   */
  onClickHandlerFromChild = (personObj) => {
    console.log('ClickHandler', personObj);
  }

  
  render(){

    const {person} = this.state;

    return (
      <div className="App">
        <Person name={person[0].name} age={person[0].age} click={this.onClickHandlerFromChild.bind(this, person[0])}>
          I am Software Engineer
        </Person>
        <Person name={person[0].name} age={person[0].age} click={this.onClickHandlerFromChild.bind(this, person[1])}>
          I am a Bank employee
        </Person>
      </div>
    )
  }
}

export default App; 
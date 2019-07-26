import './App.css';

import React from 'react';
import Person from './Person/Person';

const btnStyles = {
  backgroundColor : '#fff',
  color: 'green',
  border : '1px solid gray',
  cursor: 'pointer',
  padding: '10px'
}
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
    address : 'Bangalore, India',
    inputText: 'Text',
    isPersonsViewed : false // Implementing conditional based content rendering in react applications, but keep in mind we can just us ternary operator (?) in JSX syntax we can use if condition and wrap that operator in between {}. 
    //The content will be rendered dynamically based in the condition and it improves the performance by not showing in intended view and eliminate rendering of un shown elements
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

  /**
   * Two way binding can be achieved with settingState when you change any value in input and that state is passed to the value of an input
   */
  onChangeInputHandler = (event) => {
    this.setState({
      inputText : event.target.value
    });
  }

  toggleViewPersonsHandler = () => {
    const isPersonsViewed = this.state.isPersonsViewed;
    this.setState({
      isPersonsViewed : !isPersonsViewed
    });
  }

  
  render(){

    const {person, isPersonsViewed} = this.state;

    return (
      <div className="App">
        <h1>Examples of React</h1>
        <button style={btnStyles} onClick={this.toggleViewPersonsHandler}>Toggle Persons</button>
        { isPersonsViewed ? 
          <div>
            <Person name={person[0].name} age={person[0].age} click={this.onClickHandlerFromChild.bind(this, person[0])} change={this.onChangeInputHandler} inputText={this.state.inputText}>
                      I am Software Engineer
            </Person>
            <Person name={person[0].name} age={person[0].age} click={this.onClickHandlerFromChild.bind(this, person[1])} change={this.onChangeInputHandler} inputText={this.state.inputText}>
              I am a Bank employee
            </Person>
          </div>
          : null
        }
      </div>
    )
  }
}

export default App; 
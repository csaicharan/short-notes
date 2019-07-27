import './App.css';

import React from 'react';
import Person from './Person/Person';

class App extends React.Component {

  state = {
    person : [
      {
        id: '1', // While iterating through the list react expects an unique identifier to be assigned to JSX's 'key' attribute to avoid re-rendering un changed elements of the lists while we are performing CRUD operations in an Array
        name: 'Sai',
        age: 29
      },
      {
        id: '2',
        name: 'Ramu',
        age: 30
      }
    ],
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
  onChangeInputHandler = (index, event) => {
    const person = {
      ...this.state.person[index], // Earlier we just not tried to mutate the array, but it contains the objects we are following the same to maintain the immutable data and it is equivalent to Object.assign({}, this.state.person[index]).
      inputText : event.target.value
    }
    let persons = [...this.state.person]; // Using spread operator we are creating a copy of the original array to maintain the mutability of the state object

    persons[index] = person;

    this.setState({
      person: persons
    });
  }

  toggleViewPersonsHandler = () => {
    const isPersonsViewed = this.state.isPersonsViewed;
    this.setState({
      isPersonsViewed : !isPersonsViewed
    });
  }

  onDeleteHandler(deletedIndex){
    let persons = [...this.state.person];
    persons.splice(deletedIndex, 1);
    this.setState({
      person: persons
    });
  }

  render(){

    const {person: persons, isPersonsViewed} = this.state;

    let btnStyles = {
      backgroundColor : 'Green',
      color: '#fff',
      border : '1px solid gray',
      cursor: 'pointer',
      padding: '10px'
    }

    let personsHtml = null; // Can write the conditional rendering in the most elegant way by storing into the variable and using it in the JSX

    if(isPersonsViewed){
      personsHtml = (
          <div>
            {
              persons.map((person, index) => {
                return (
                    <Person 
                      name={person.name} 
                      age={person.age}
                      inputText={person.inputText}
                      change={this.onChangeInputHandler.bind(this, index)}
                      delete={this.onDeleteHandler.bind(this, index)}
                      key={person.id}
                    />
                )
              })
            }
          </div>
      );
      btnStyles.backgroundColor = 'red'; // Adding styles dynamically to the button and of we observe here we are taking advantage of render method and skipping the else part to make the background to green
    }

    let headingClasses = [];

    if(persons.length === 2){
      headingClasses.push('bold');
    }
    if(persons.length === 1){
      headingClasses.push('red');
    }
    if(persons.length === 0){
      headingClasses.push('strike');
    }

    return (
        <div className="App">
          <h1 className={headingClasses.join(' ')}>Examples of React</h1>
          <button style={btnStyles} onClick={this.toggleViewPersonsHandler}>Toggle Persons</button>
          { personsHtml }
        </div>
    )
  }
}

export default App;
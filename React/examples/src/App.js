/**
 * Refactoring the Code by considering the following aspects
 * 1) My component render should be elegant and move the things which can be functional components
 * 2) Moving the inline css to css modules to make code looks cleaner and readable
 * 3) The class components should contains only the methods related to the state change other methods can be moved to the JS modules
 */

 /**
  * Life Cycle hooks of the components for create
  * constructor => getDerivedStateFromProps => render => children's Lifecycle hooks => componentDidMount
  */

import './App.css';

import React, { Component } from 'react';
import PersonsList from './Components/Persons/Persons';
import Cockpit from './Components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      person : [
        {
          id: '1', 
          name: 'Sai',
          age: 29,
          inputText: ''
        },
        {
          id: '2',
          name: 'Ramu',
          age: 30,
          inputText: ''
        }
      ],
      isPersonsViewed : true,
      changeCounter: 0

    }
    console.log("[App.Js] Constructor");
  }

  static getDerivedStateFromProps(props, state){
    console.log("[App.Js] getDerivedStateFromProps", props, state );
    return state;
  }

  componentDidMount(){
    console.log("[App.Js] componentDidMount");
  }

  // UNSAFE_componentWillMount(){ // Is Deprecated to enable async rendering
  //   console.log("[App.Js] componentWillMount");
  // }

  onChangeInputHandler = (index, event) => {
    const person = {
      ...this.state.person[index], 
      inputText : event.target.value
    }
    let persons = [ ...this.state.person ]; 

    persons[index] = person;

    // The right way to change the current state based on the prevState 
    // The wong way is this.setState({ stateVar : this.state.stateVar }) because of the setState Asynchronous way of execution you can't set the state correctly
    // The right way is this.setState((state, props) => { return {stateVar : state + 'Manipulated' } })
    this.setState((prevState, props) => {
      console.log(prevState, props);
      return {
        person: persons,
        changeCounter: prevState.changeCounter
      }
    });
  }

  toggleViewPersonsHandler = () => {
    const isPersonsViewed = this.state.isPersonsViewed;
    this.setState({
      isPersonsViewed : !isPersonsViewed
    });
  }

  onDeleteHandler = (deletedIndex) => {
    let persons = [...this.state.person];
    persons.splice(deletedIndex, 1);
    this.setState({
      person: persons
    });
  }

  render(){
    console.log("[App.Js] Render");

    const {person: persons, isPersonsViewed} = this.state;

    let personsHtml = null; 

    if(isPersonsViewed){
      personsHtml = <PersonsList 
        persons={persons}
        changed={this.onChangeInputHandler}
        deleteClicked={this.onDeleteHandler}
      />;
    }

    return (
        <div className="App">
          <Cockpit 
            personsLength={persons.length} 
            toggleClicked={this.toggleViewPersonsHandler}
            isViewToggled={this.state.isPersonsViewed}
          />
          { personsHtml }
        </div>
    )
  }
}

export default App;
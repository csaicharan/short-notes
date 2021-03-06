/**
 * Refactoring the Code by considering the following aspects
 * 1) My component render should be elegant and move the things which can be functional components
 * 2) Moving the inline css to css modules to make code looks cleaner and readable
 * 3) The class components should contains only the methods related to the state change other methods can be moved to the JS modules
 */
import './App.css';

// import axios from 'axios';
import React, { Component } from 'react';

import Cockpit from './Components/Cockpit/Cockpit';
import PersonsList from './Components/Persons/Persons';

// Auth Context is using context API to share the state between any level of hierarchy without property chaining
import AuthContext from './context/AuthService';


 /**
  * Life Cycle hooks of the components for create
  * constructor => getDerivedStateFromProps => render => children's Lifecycle hooks => componentDidMount
  */

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
      isPersonsViewed : false,
      changeCounter: 0,
      isAuthenticated : false
    }
    console.log("[App.Js] Constructor");
  }

  static getDerivedStateFromProps(props, state){
    console.log("[App.Js] getDerivedStateFromProps", props, state );
    return state;
  }

  componentDidMount(){
    // axios.get('http://www.json-generator.com/api/json/get/bULIsVWTiq?indent=2')
    // .then(response=>{
    //   console.log('Response from server', response);
    // });
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

  loginHandler = () =>{
    this.setState((prevState, props)=>{
      return {
        isAuthenticated : !prevState.isAuthenticated
      }
    });
  }

  render(){
    console.log("[App.Js] Render");

    const {person: persons, isPersonsViewed} = this.state;

    // Here we are setting the global state of the application to use it from anywhere
    const AuthContextValue = {
      authenticated : this.state.isAuthenticated, // Authenticated state
      login : this.loginHandler // Handler to change the authentication state
    };



    let personsHtml = null; 

    if(isPersonsViewed){
      personsHtml = <PersonsList 
        persons={persons}
        changed={this.onChangeInputHandler}
        deleteClicked={this.onDeleteHandler}
      />;
    }

    // Should specify the provider that we are going to use this authContext to the component tree with the initial value

    return (
      <AuthContext.Provider value={AuthContextValue}>
        <div className="App">
          <Cockpit 
            personsLength={persons.length} 
            toggleClicked={this.toggleViewPersonsHandler}
            isViewToggled={this.state.isPersonsViewed}
          />
          { personsHtml }
        </div>
      </AuthContext.Provider>
    )
  }
}

export default App;
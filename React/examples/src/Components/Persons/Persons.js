import React, {Component} from 'react';

import Person from './Person/Person';

class PersonsList extends Component{

    constructor(props){
        super(props);
        this.state = {};
        console.log('[Persons.js] constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log("[Persons.js] getDerivedStateFromProps");
    return state;
    }

    componentDidMount(){
        console.log("[Persons.js] componentDidMount");
    }

    componentWillUnmount(){
        console.log("[Persons.js] componentWillUnmount"); // this lifecycle method executes on unmounting of this component
    }

    render(){
        console.log('[Persons.js] render');
        return this.props.persons.map((person, index) => {
            return <Person 
                name={person.name} 
                age={person.age}
                inputText={person.inputText}
                change={this.props.changed.bind(this, index)}
                delete={this.props.deleteClicked.bind(this, index)}
                key={person.id}
            />
        })
    }
}

export default PersonsList;
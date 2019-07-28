import React from 'react';

import Person from './Person/Person';

const PersonsList = (props) => props.persons.map((person, index) => <Person 
    name={person.name} 
    age={person.age}
    inputText={person.inputText}
    change={props.changed.bind(this, index)}
    delete={props.deleteClicked.bind(this, index)}
    key={person.id}
/>);

export default PersonsList;
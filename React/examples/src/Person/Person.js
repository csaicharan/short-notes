// While creating the functional component we must keep in mind we should import React to use JSX syntax in the js files
// Functional or stateless or dumb or presentational components which are not having any states attached to the component
import React from 'react';

const Person = (props) => {
    return (
        <div>
            <p>Name: {props.name} Age: {props.age}</p>
            <div>{props.children}</div>
            <button onClick={props.click}>Click Me</button>
        </div>
    );
}

export default Person;
// While creating the functional component we must keep in mind we should import React to use JSX syntax in the js files
// Functional or stateless or dumb or presentational components which are not having any states attached to the component
import React from 'react';
import './Person.css'; // This type of style imports are not scoped to the component, it will be adding into the global styles. We have to make sure weather it is not conflicting to the other styles by adding a container class and other style should be under that class

const Person = (props) => {
    return (
        <div className="person">
            <p>Name: {props.name} Age: {props.age}</p>
            <div>{props.children}</div>
            <input type="text" value={props.inputText} onChange={props.change}/>
            <button onClick={props.click}>Click Me</button>
        </div>
    );
}

export default Person;
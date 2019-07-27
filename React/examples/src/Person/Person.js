// While creating the functional component we must keep in mind we should import React to use JSX syntax in the js files
// Functional or stateless or dumb or presentational components which are not having any states attached to the component
import React from 'react';

import './Person.css'; // This type of style imports are not scoped to the component, it will be adding into the global styles. We have to make sure weather it is not conflicting to the other styles by adding a container class and other style should be under that class

// Inline styles can be added into the react components by creating CSS as an object and then assign it to the element's "style" attribute and the properties of CSS should as camelCased keys in this CSS object JSX will take of rendering into that element's CSS 
const btnStyles = {
    backgroundColor : '#fff',
    color: 'green',
    border : '1px solid gray',
    cursor: 'pointer'
}

const Person = (props) => {


    return (
        <div className="person" >
            <p>Name: {props.name} Age: {props.age}</p>
            <p>Occupation: {props.inputText}</p>
            <div>{props.children}</div>
            <input type="text" value={props.inputText} onChange={props.change}/>
            <div>
                <button onClick={props.delete} style={btnStyles}>Delete</button>
            </div>
        </div>
    );
}

export default Person;
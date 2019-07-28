import React from 'react';

import CSSClass from './Person.module.css';

const Person = (props) => {

    return (
        <div className={CSSClass.Person} >
            <p>My Name is <strong>{props.name}</strong> and my Age is <strong>{props.age}</strong>.</p>
            <p>My Occupation is  <strong>{props.inputText}</strong></p>
            <div>{props.children}</div>
            <input type="text" value={props.inputText} onChange={props.change}/>
            <div>
                <button onClick={props.delete}>Delete</button>
            </div>
        </div>
    );
}

export default Person;
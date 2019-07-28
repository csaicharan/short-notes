import React, {Component} from 'react';

import CSSClass from './Person.module.css';

class Person extends Component {

    render(){
        console.log("[Person.js constructor]");

        return (
            <div className={CSSClass.Person} >
                <p>My Name is <strong>{this.props.name}</strong> and my Age is <strong>{this.props.age}</strong>.</p>
                <p>My Occupation is  <strong>{this.props.inputText}</strong></p>
                <div>{this.props.children}</div>
                <input type="text" value={this.props.inputText} onChange={this.props.change}/>
                <div>
                    <button onClick={this.props.delete}>Delete</button>
                </div>
            </div>
        );
    }
}

export default Person;
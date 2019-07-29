import React, {Component} from 'react';

import CSSClass from './Person.module.css';

import Wrapper from '../../../HOC/WrapperComponent';
import WithClass from '../../../HOC/withClassComponent';

class Person extends Component {

    render(){
        console.log("[Person.js constructor]");

        return (
            <Wrapper>
             {/* <div className={CSSClass.Person} > */}
                <p>My Name is <strong>{this.props.name}</strong> and my Age is <strong>{this.props.age}</strong>.</p>
                <p>My Occupation is  <strong>{this.props.inputText}</strong></p>
                <div>{this.props.children}</div>
                <input type="text" value={this.props.inputText} onChange={this.props.change}/>
                <div>
                    <button onClick={this.props.delete}>Delete</button>
                </div>
            {/* // </div> */}
            </Wrapper>
        );
    }
}

export default WithClass(Person, CSSClass.Person);
// export default Person;
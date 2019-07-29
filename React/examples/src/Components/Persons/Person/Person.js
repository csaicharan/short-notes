import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CSSClass from './Person.module.css';

import Wrapper from '../../../HOC/WrapperComponent';
import WithClass from '../../../HOC/withClassComponent';

class Person extends Component {

    componentDidMount(){
        console.log(this.inputRef);
        this.inputRef.focus();
    }

    render(){
        console.log("[Person.js constructor]");

        return (
            <Wrapper>
             {/* <div className={CSSClass.Person} > */}
                <p>My Name is <strong>{this.props.name}</strong> and my Age is <strong>{this.props.age}</strong>.</p>
                <p>My Occupation is  <strong>{this.props.inputText}</strong></p>
                <div>{this.props.children}</div>
                <input 
                    type="text" 
                    value={this.props.inputText} 
                    onChange={this.props.change}
                    ref={(inputRef) => {this.inputRef = inputRef;}}
                />
                <div>
                    <button onClick={this.props.delete}>Delete</button>
                </div>
            {/* // </div> */}
            </Wrapper>
        );
    }
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    inputText: PropTypes.string,
    change: PropTypes.func,
    delete: PropTypes.func
}

export default WithClass(Person, CSSClass.Person);
// export default Person;
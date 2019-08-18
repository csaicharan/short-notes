import React, {Component} from 'react';
import PropTypes from 'prop-types';

import CSSClass from './Person.module.css';

import Wrapper from '../../../HOC/WrapperComponent';
import WithClass from '../../../HOC/withClassComponent';

import AuthContext from '../../../context/AuthService';

class Person extends Component {

    static contextType = AuthContext;

    /**
     * After React 16.3 we can get the references in different approach
     */
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef(); // New way of creating references
    }

    componentDidMount(){
        // this.inputRef.focus(); // This is the old way of getting the element's reference
        this.inputElementRef.current.focus();
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
                    // ref={(inputRef) => {this.inputRef = inputRef;}} This is the old way of getting the element's reference
                    ref={this.inputElementRef}
                />
                <div>
                    <button onClick={this.props.delete}>Delete</button>
                </div>
                <div>{this.context.authenticated ? <strong>Authenticated</strong> : <div>Login Please!!!</div> }</div>

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
import React, {Component} from 'react';
import Child from '../../components/Child';

class ParentTwo extends Component{
    render(){
        return (
            <div>
                Parent Two
                <Child parentName="Parent Two"></Child>
            </div>
        )
    }
}

export default ParentTwo;
import React, {Component} from 'react';

import {withRouter} from 'react-router-dom';

class Child extends Component{

    componentDidMount(){
        // By using withRouter HOC we can bind router's default properties with the component's properties
        console.log(this.props);
    }

    render(){
        return (
            <div>
                Child One Component from parent <strong>{this.props.parentName}</strong>
            </div>
        );
    }
}

export default withRouter(Child);
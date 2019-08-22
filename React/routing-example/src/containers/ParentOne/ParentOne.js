import React, {Component} from 'react';
import Child from '../../components/Child';


class ParentOne extends Component{

    componentDidMount(){
        // By default router sets some of the properties to the routed component like location, utility methods and router information
        /**
         *  NOTE: This properties only will bind for the routed component and it isn't bind for the components in that component hierarchy
         *  if we want to bind the router props to any component in the hierarchy we use withRouter HOC provided by react-router-dom
        */ 
        console.log(this.props); 
    }

    render(){
        return (
            <div>
                Parent One
                <Child parentName="Parent One"></Child>
            </div>
        )
    }
}

export default ParentOne;
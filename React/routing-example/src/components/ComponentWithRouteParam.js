import React, {Component} from 'react';

class ComponentWithRouteParam extends Component{
    render(){
        return (
            <div>
                The Child with route param <strong>{this.props.match.params.someId}</strong>
            </div>
        );
    }
}

export default ComponentWithRouteParam;
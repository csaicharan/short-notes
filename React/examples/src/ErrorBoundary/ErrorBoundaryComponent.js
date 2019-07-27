import React, {Component} from 'react';



// Here we are creating an HOC to listen to the errors and transform it into some meaningful content
// The HOC higher order components takes component as an body and enhances the functionality and returning it by this.props.children

class ErrorBoundaryComponent extends Component{

    state = {
        hasError : false
    }

    // componentDidCatch is component hook to listen weather any error occurred in the children and then transforms to the meaningful content
    // NOTE: In the development mode the error will still appears once it is moved into the production it just return the meaningful content
    componentDidCatch = (error, info) => {
        console.log(error, info);
        this.setState({
            hasError : true
        })
    }

    render(){
        const {hasError} = {...this.state}

        if(hasError){
            return (
                <div>
                    <h1>Some error occurred try again later</h1>
                </div>
            )
        }else{
            return this.props.children
        }
    }
}

export default ErrorBoundaryComponent;
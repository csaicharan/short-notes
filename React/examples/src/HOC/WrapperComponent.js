// Here we are creating an higher order component to render the children, this is a simple example of the component
const wrapperComponent = (props) =>{
    return props.children;
}

export default wrapperComponent;
import React, {useEffect} from 'react';

import CSSClasses from './Cockpit.module.css';

const Cockpit = (props) => {

    // useEffect usage this is like componentDidUpdate and componentDidMount
    useEffect(()=>{

      console.log("[Cockpit.js] useEffect");
      
      return () => {
        console.log("[Cockpit.js] Clean up work of useEffect");
      }
    }); // Depending on the passing array we choose weather it should execute on just like didMount or didUpdate 
    // Possible inputs
    // nothing : triggers every didMount and didUpdate on every input prop changes
    // [] : empty array used to tell just execute like didMount
    // Specific property : used to trigger when that property changes

    const cockPitClasses = [];
    let btnClass = '';

    if(props.personsLength === 2){
      cockPitClasses.push(CSSClasses.bold);
    }
    if(props.personsLength === 1){
      cockPitClasses.push(CSSClasses.red);
    }
    if(props.personsLength === 0){
      cockPitClasses.push(CSSClasses.strike);
    }

    if(props.isViewToggled){
      btnClass = CSSClasses.red;
    }

    return (
        <div className={CSSClasses.Cockpit}>
          <h1 className={cockPitClasses.join(' ')}>Examples of React</h1>
          <button className={btnClass} onClick={props.toggleClicked}>Toggle Persons</button>
        </div>
    );
}



export default React.memo(Cockpit);
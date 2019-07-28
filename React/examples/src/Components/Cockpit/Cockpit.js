import React from 'react';

import CSSClasses from './Cockpit.module.css';

const Cockpit = (props) => {

    const cockPitClasses = [];
    let btnClass = '';

    if(props.persons.length === 2){
      cockPitClasses.push(CSSClasses.bold);
    }
    if(props.persons.length === 1){
      cockPitClasses.push(CSSClasses.red);
    }
    if(props.persons.length === 0){
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



export default Cockpit;
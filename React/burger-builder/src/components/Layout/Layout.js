import React from 'react';

import Aux from '../../hoc/Aux';

import CSSClass from './Layout.module.css';

/**
 * This is to define the layout of the page
 */

const layout = (props) => (
    <Aux>
        <div className={CSSClass.header}>Header, Sidebar, Backdrop</div>
        <main>
           {props.children}
        </main>
    </Aux>
);

export default layout;
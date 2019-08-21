import React, {Component} from 'react';

/**
 * Step 2: Should import Route to start using routing in the application
 */
import {Route, Link} from 'react-router-dom';
import Home from '../../components/Home/Home';

import CSSClasses from './Layout.module.css';
import ParentOne from '../ParentOne/ParentOne';
import ParentTwo from '../ParentTwo/ParentTwo';

class Layout extends Component{
    render(){
        return (
            <div>
                <header>
                    <nav className={CSSClasses.nav}>
                        <ol>
                            <li>
                                {/* If we use <a/> tag it reloads the application when we click the link, to use react render to navigate between the pages use Link component from react-renders-dom */}
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/parent-one">Parent One</Link>
                            </li>
                            <li>
                                <Link to="/parent-two">Parent Two</Link>
                            </li>
                        </ol>
                    </nav>
                </header>
                <main>
                    {/* Here Exact refers to check the exact URL of the route if you wont use it will takes as a base path and renders in all the paths starting with the same path */}
                    <Route path="/" exact render={() => <Home>Home 1</Home>}/>
                    <Route path="/" render={() => <Home>Home 2</Home>}/>
                    {/* Binding component to the route with the following code */}
                    <Route path="/parent-one" component={ParentOne}/>
                    <Route path="/parent-two" component={ParentTwo}/>
                </main>
            </div>
        )
    }
}

export default Layout;
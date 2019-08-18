import React, {Component} from 'react';

/**
 * Step 2: Should import Route to start using routing in the application
 */
import {Route} from 'react-router-dom';
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
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/parent-one">Parent One</a>
                            </li>
                            <li>
                                <a href="/parent-two">Parent Two</a>
                            </li>
                        </ol>
                    </nav>
                </header>
                <main>
                    {/* Here Exact refers to check the exact URL of the route if you wont use it will takes as a base path and renders in all the paths starting with the same path */}
                    <Route path="/" exact render={() => <Home>Home 1</Home>}/>
                    <Route path="/" render={() => <Home>Home 2</Home>}/>
                    <Route path="/parent-one" render={() => <ParentOne/>}/>
                    <Route path="/parent-two" render={() => <ParentTwo/>}/>
                </main>
            </div>
        )
    }
}

export default Layout;
import React, {Component} from 'react';

/**
 * Step 2: Should import Route to start using routing in the application
 */
// NOTE: Changing to NavLink to maintain active touter link
import {Route, NavLink} from 'react-router-dom';
import Home from '../../components/Home/Home';

import CSSClasses from './Layout.module.css';
import ParentOne from '../ParentOne/ParentOne';
import ParentTwo from '../ParentTwo/ParentTwo';

const routerLinkOptions = {
    pathname : '/parent-two',
    hash: '#submit',
    search: '?quick-search=true'
}
const activeStyleObj = {
    backgroundColor: '#fbf9f9'
}
class Layout extends Component{
    render(){

        return (
            <div>
                <header>
                    <nav className={CSSClasses.nav}>
                        <ol>
                            <li>

                                {/* If we use <a/> tag it reloads the application when we click the link, to use react render to navigate between the pages use Link component from react-renders-dom */}
                                {/** can override default "active" class with "activeClassName" attribute*/ }
                                {/** can provide the active styles using "activeStyles" attribute */ }

                                <NavLink 
                                    to="/" 
                                    activeClassName={CSSClasses.active} 
                                    exact
                                    activeStyle={activeStyleObj}
                                >Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/parent-one" activeClassName={CSSClasses.active}>Parent One</NavLink>
                            </li>
                            <li>
                                <NavLink to={routerLinkOptions} activeClassName={CSSClasses.active}>Parent Two</NavLink>
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
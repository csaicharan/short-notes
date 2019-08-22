import React, { Component } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';

import ComponentWithRouteParam from '../../components/ComponentWithRouteParam';
import ParentOne from '../ParentOne/ParentOne';
import ParentTwo from '../ParentTwo/ParentTwo';
import CSSClasses from './Layout.module.css';

/**
 * Step 2: Should import Route to start using routing in the application
 */
// NOTE: Changing to NavLink to maintain active touter link
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
                    <Route path="/" 
                        exact 
                        render={() => {
                            return (
                                <ul>
                                    <li>
                                        <Link to='/1'>Go To Link One</Link>
                                    </li>
                                    <li>
                                        <Link to='/2'>Go To Link Two</Link>
                                    </li>
                                </ul>
                            )
                        }}/>

                    {/* <Route path="/" render={() => <Home>Home 2</Home>}/> */}

                    {/* Binding component to the route with the following code */}
                    <Route path="/parent-one" component={ParentOne}/>
                    <Route path="/parent-two" component={ParentTwo}/>

                    {/** Route with parameters note that the same someId identifier should be used at the receiving end component */}
                    <Route path="/:someId" component={ComponentWithRouteParam} />

                </main>
            </div>
        )
    }
}

export default Layout;
import React, { Component } from 'react';
import { Link, NavLink, Route, Switch, Redirect } from 'react-router-dom';

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
                                    to="/home" 
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
                    {/** The problem with the route params are if we use /:id at root level and the rest paths were also considered as the id's to eliminate we use switch HOC to tell the router to use first available route with the criteria */}
                <Switch>

                    {/* Binding component to the route with the following code */}
                    {/* React should detect this routes first and then it has to render the other routes, it works as FIFO basis */}
                    <Route path="/parent-one" component={ParentOne}/>
                    <Route path="/parent-two" component={ParentTwo}/>
                    {/* Here Exact refers to check the exact URL of the route if you wont use it will takes as a base path and renders in all the paths starting with the same path */}
                    {/** Here we should remove exact attribute to make nested route work because the exact checks for the route and it wont render andy another route including child route */}
                    <Route path="/home" 
                        render={() => {
                            return (
                                <div>
                                <ul>
                                    <li>
                                        <Link to='/home/1'>View Link One</Link>
                                    </li>
                                    <li>
                                        <Link to='/home/2'>View Link Two</Link>
                                    </li>
                                </ul>

                                {/** Route with parameters note that the same someId identifier should be used at the receiving end component */}
                                {/** If we move this into component we can use this.props.match.url to create relative paths */}
                                <Route path="/home/:someId" component={ComponentWithRouteParam} />
                                </div>
                            )
                        }}/>

                    {/* <Route path="/" render={() => <Home>Home 2</Home>}/> */}
                    {/* <Redirect from="/" to="/home"/> */}
                    {/* Implementing 404 error page */}
                    {/* Basically when we want to implement 404 page we just use route component without path */}

                    <Route render={()=> <h1>Not Found</h1>}/>

                </Switch>
                </main>
            </div>
        )
    }
}

export default Layout;
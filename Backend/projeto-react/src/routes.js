import React from 'react';
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './components/App/index';

export const isAuthenticated = () =>  {
    if (localStorage.getItem('token')) {
        return true
    } else {
        return false
    }
}

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route 
    {...rest} 
    render={props =>
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: '/', state: {from: props.location} } } />
        )
    } 
    />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            {<PrivateRoute exact path="/profile" component={()=> <h1>Você está autenticado</h1>} />}
        </Switch>
    </BrowserRouter>
)

export default Routes;
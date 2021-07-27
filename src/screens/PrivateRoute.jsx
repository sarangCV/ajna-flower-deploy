import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
    const isAuth = true;
    console.log('isAuth')
    return (
        <Route {...rest} render={() => window.sessionStorage.getItem('sarangcv') ? (children) : (<Redirect to={'/'}/>)}/>
    )
}

export default PrivateRoute;
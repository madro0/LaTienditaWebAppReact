import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router';

export const PrivateRoute = ({
    isAutenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
            component ={ (props)=> (
                (isAutenticated) 
                ? (<Component {...props}/>)
                : (<Redirect to="/login" />) 
            )}
        />
    )
}

PrivateRoute.prototype ={
    isAutenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
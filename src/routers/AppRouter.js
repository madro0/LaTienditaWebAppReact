import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DashboardRoutes } from './DashboardRoutes';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startCheking } from '../actions/auth';

export const AppRouter = () => {
    const {id} = useSelector( state => state.auth);
    const {checking} = useSelector( state => state.auth);

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(startCheking());

    }, [dispatch])

    if (checking){
        return (
            <h1>Wait...</h1>
        )
    }

    return (
        <Router>
            <div>
               <Switch>
                   <PublicRoute 
                        extact path="/login" 
                        component={LoginScreen}
                        isAutenticated = {!!id}
                        
                    />

                   <PrivateRoute
                        isAutenticated = {!!id}
                        path="/" 
                        component={DashboardRoutes}
                   />
                   {/* <Route path="/" component={DashboardRoutes}></Route> */}
                    <Redirect to ="/login"/>
               </Switch> 
            </div>
        </Router>
    )
}

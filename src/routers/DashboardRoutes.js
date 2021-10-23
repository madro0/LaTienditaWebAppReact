import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import formularioProductos from '../componentes/formulario_productos/formularioProductos';
import { SalasSystemScreen } from '../screens/dashboard/sales/selasSystem/SalasSystemScreen';
import { SalesManagementScreen } from '../screens/dashboard/sales/salesManagement/SalesManagementScreen';
import { ProductsScreen } from '../screens/dashboard/products/ProductsScreen';

export const DashboardRoutes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/formularioProductos" component={formularioProductos}/>
                <Route exact path="/products" component={ProductsScreen}/>
                <Route exact path="/sales" component={SalasSystemScreen}/>
                <Route exact path="/salesList" component={SalesManagementScreen}/>
                
                <Redirect to="/sales"/>
            </Switch>
            
        </div>
    )
}

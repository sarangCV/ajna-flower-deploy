import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from './screens/signin';
import Home from './screens/home';
import Dispatch from './screens/dispatch';
import TransportDetails from './screens/dispatch/transport-details';
import Dispatches from './screens/dispatch/dispatches';
import Reports from './screens/reports';
import Master from './screens/master';
import Clients from './screens/master/clients';
import AddClients from './screens/master/clients/add-clients';
import ItemPrice from './screens/dispatch/assign/item-price';

import PrivateRoute from './screens/PrivateRoute';

function Router() {
    return (
       <BrowserRouter>
            <Switch>
                <PrivateRoute exact path="/dashboard">
                    <Home/>
                </PrivateRoute>
                <PrivateRoute exact path="/dispatch">
                    <Dispatch/>
                </PrivateRoute>
                <PrivateRoute exact path="/transport-details">
                    <TransportDetails/>
                </PrivateRoute>
                <Route exact path="/" component={SignIn}/>

                {/* <Route exact path="/dispatches" component={Dispatches}/>
                <Route exact path="/reports" component={Reports}/>
                <Route exact path="/master" component={Master}/>
                <Route exact path="/clients" component={Clients}/>
                <Route exact path="/add-clients" component={AddClients}/>
                <Route exact path="/item-price" component={ItemPrice}/> */}
            </Switch>
       </BrowserRouter>
    )
}

export default Router

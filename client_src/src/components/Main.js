import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Customers from './Customers';
import About from './About';
import CustomerDetails from './CustomerDetails';
import AddCustomer from './AddCustomer';
import EditCustomer from './EditCustomer';

const Main = () => (
    <main>
        <Switch>
            <Route exact path = '/' component = {Customers} />
            <Route exact path = '/about' component = {About} />
            <Route exact path = '/customers/add' component = {AddCustomer} />
            <Route exact path = '/customers/edit/:id' component = {EditCustomer} />
            <Route exact path = '/customers/:id' component = {CustomerDetails} />
        </Switch>
    </main>

)

export default Main;
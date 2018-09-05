import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './../components/Header';
import Contacts from './../components/Contacts';
import AddContact from './../components/AddContact';
import EditContact from './../components/EditContact';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route 
                    path="/"
                    component={Contacts}
                    exact={true}
                />
                <Route 
                    path="/add"
                    component={AddContact}
                />
                <Route 
                    path="/edit/:id"
                    component={EditContact}
                    exact={true}
                />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
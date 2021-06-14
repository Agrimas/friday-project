import React from 'react';
import {Route, Switch} from 'react-router-dom';
import logo from '../../logo.svg';
import './App.css';
import Header from '../Header/Header';
import Test from '../Test/Test';

function App() {
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path={'/'} render={() => <h1>Main</h1>}/>
                <Route path={'/login'} render={() => <h1>Login</h1>}/>
                <Route path={'/register'} render={() => <h1>Register</h1>}/>
                <Route path={'/password_recovery'} render={() => <h1>Recovery password</h1>}/>
                <Route path={'/password_new'} render={() => <h1>New password</h1>}/>
                <Route path={'/profile'} render={() => <h1>Profile</h1>}/>
                <Route path={'/test'} render={() => <Test/>}/>
                <Route render={() => <h1>404</h1>}/>
            </Switch>
        </>
    );
}

export default App;

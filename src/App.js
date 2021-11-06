import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login/Login';
import SignUp from './components/login/SignUp';
import Forms from './components/forms/Forms';
import Questions from './components/questions/Questions';
import Answers from './components/answers/Answers';
import Apply from './components/pages/Apply';
import Response from './components/pages/Response';
import Navbar from './components/layout/Navbar';
import './App.css';

import NavigationState from './context/navigation/NavigationState';
import AppState from './context/appcontext/FormsState';

function App() {
    return (
        <AppState>
            <NavigationState>
                <Router>
                    <Navbar />
                    <Route exact path='/' component={Login} />
                    <Route exact path='/signup' component={SignUp} />
                    <Switch>
                        <Route exact path='/forms' component={Forms} />
                        <Route exact path='/questions' component={Questions} />
                        <Route exact path='/answers' component={Answers} />
                        <Route exact path='/apply' component={Apply} />
                        <Route exact path='/response' component={Response} />
                    </Switch>
                </Router>
            </NavigationState>
        </AppState>
    );
}

export default App;

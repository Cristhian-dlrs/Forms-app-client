import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
    return (
        <NavigationState>
            <div>
                <Navbar />
                <div className='main'></div>
            </div>
        </NavigationState>
    );
}

export default App;

import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';
import LoginPage from './Components/Pages/LoginPage';

const App = () => {
    return (
    <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
    </div>);
}

export default App;

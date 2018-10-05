import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import Clock from './clock'

const App = () => (
    <div className='container'>
    <h1 className='text-center'>CLOCK TIME</h1>
        <Clock />
    </div>
);


export default App;

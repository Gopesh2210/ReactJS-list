import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routes from './router';
import './App.css';
// import logo from './logo.svg';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"
import Control from "./Components/Control"
import firebase from "./firebase"

 


function App() {
  return (
    <div className="App" >
    <Header/>
    <Control/>
    </div>
  );
}

export default App;

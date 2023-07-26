import React from 'react';
import { Global, css } from '@emotion/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
import Header from './components/Header';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;

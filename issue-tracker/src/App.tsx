import React from 'react';
import { Global, css } from '@emotion/react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, useParams } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import IssueDatail from "./pages/IssueDatail";

function App() {
  const { id } = useParams();
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/issues/:id' element={<IssueDatail id={id} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

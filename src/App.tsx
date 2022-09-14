import React, { Component } from 'react';
import './App.css';
import 'tw-elements';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './page/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

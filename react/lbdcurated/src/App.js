
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

import LandingPage from './pages/landingPage';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} /> 

      </Routes>
      </div>
      </Router>
  );
}

export default App;
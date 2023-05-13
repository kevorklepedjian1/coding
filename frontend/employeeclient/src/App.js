import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import EmployeeList from './components/EmployeeList';


function App() {
  return (

    <Router>
      
      
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<EmployeeList />} />
          
        </Routes>
    
    </Router>
  );
}

export default App;


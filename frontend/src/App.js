import React from 'react';

import './App.css';
import LandingPage from './WebPages/LandingPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Exam from './WebPages/Exam';
import ExamDetails from './WebPages/ExamDetails';
import Result from './WebPages/Result';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/home" exact element={<LandingPage/>}/>
        <Route path="/exam-details/:id" exact element={<ExamDetails/>}/>
        <Route path="/exam/:id" exact element={<Exam/>}/>
        <Route path='/result/:id' exact element={<Result/>}/>
      </Routes>
    </Router>
  );
}

export default App;

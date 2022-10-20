import React from 'react';

import './App.css';
import LandingPage from './WebPages/LandingPage';
import ExamStartPage from './WebPages/ExamStartPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ExamPage from './WebPages/ExamPage';
import AnswerQuestions from './Components/AnswerQuestions';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/home" exact element={<LandingPage/>}/>
        <Route path="/exam-details" exact element={<ExamStartPage/>}/>
        <Route path="/exam" exact element={<ExamPage/>}/>
        {/* <Route path='/result' exact element={<ResultPage/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;

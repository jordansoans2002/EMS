import React from 'react';

import './App.css';
import LandingPage from './WebPages/LandingPage';
import ExamStartPage from './WebPages/ExamDetails';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Exam from './WebPages/Exam';
import AnswerQuestions from './Components/AnswerQuestions';
import ExamDetails from './WebPages/ExamDetails';


function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/home" exact element={<LandingPage/>}/>
        <Route path="/exam-details/:id" exact element={<ExamDetails/>}/>
        <Route path="/exam" exact element={<Exam/>}/>
        {/* <Route path='/result' exact element={<ResultPage/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;

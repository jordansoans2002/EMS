import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './LandingPage';
const Webpages = () => {
    return(
        <Router>
            <Route exact path="/homepage" component= {LandingPage} />
        </Router>
    );
};
export default Webpages;
import React,{ Component } from 'react';

import './App.css';
import JobCard from './Components/JobCard'
import LoginModal from './Components/LoginModal';

function App() {

  const [modalShow, setModalShow] = React.useState(false);
  //const [loggedIn,setLoggedIn] = React.useState(false);
  return (
    <>

      <LoginModal
        show={modalShow}//{modalShow || !loggedIn}
        onHide={() => setModalShow(false)}
      />

      <div onClick={() => setModalShow(true)}>
        <JobCard 
          jobrole='Job Role' 
          description='Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' 
          qualifications='Qualifications required' 
          duration='1 hour' 
          pattern='mcq'
        />
      </div>
    </>
  );
}

export default App;

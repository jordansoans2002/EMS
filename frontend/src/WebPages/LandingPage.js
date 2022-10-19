import React from 'react';
import { Link } from 'react-router-dom';

import JobCard from '../Components/JobCard'
import LoginModal from '../Components/LoginModal';
import Nav from "../Components/Nav"

function LandingPage() {
  
  let companies=[
    {
      companyName:'Company 1',
      jobRoles:[
        {jobRole:'Job Role 1',
        description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
        qualifications:'Qualifications required' ,
        duration:'1 ' ,
        pattern:'mcq'},
        {jobRole:'Job Role 2',
        description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
        qualifications:'Qualifications required' ,
        duration:'1 ' ,
        pattern:'mcq'},
        {jobRole:'Job Role 3',
        description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
        qualifications:'Qualifications required' ,
        duration:'1 ' ,
        pattern:'mcq'},
        {jobRole:'Job Role 4',
        description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
        qualifications:'Qualifications required' ,
        duration:'1 ' ,
        pattern:'mcq'},
        {jobRole:'Job Role 5',
        description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
        qualifications:'Qualifications required' ,
        duration:'1' ,
        pattern:'mcq'},
        {jobRole:'Job Role 6',
        description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
        qualifications:'Qualifications required' ,
        duration:'1' ,
        pattern:'mcq'}
      ]
    },
    {
      companyName:'Company 2',
      jobRoles:[
        {jobRole:'Job Role 1',
        description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
        qualifications:'Qualifications required' ,
        duration:'1 hour' ,
        pattern:'mcq'},
        {jobRole:'Job Role 2',
        description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
        qualifications:'Qualifications required' ,
        duration:'1 hour' ,
        pattern:'mcq'},
        {jobRole:'Job Role 3',
        description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
        qualifications:'Qualifications required' ,
        duration:'1 hour' ,
        pattern:'mcq'}
      ]
    },
    {
      companyName:'Company 3',
      jobRoles:[
        {jobRole:'Job Role 1',
        description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
        qualifications:'Qualifications required' ,
        duration:'1 hour' ,
        pattern:'mcq'},
        {jobRole:'Job Role 2',
        description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
        qualifications:'Qualifications required' ,
        duration:'1 hour' ,
        pattern:'mcq'},
        {jobRole:'Job Role 3',
        description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
        qualifications:'Qualifications required' ,
        duration:'1 hour' ,
        pattern:'mcq'}
      ]
    }
  ]

  const [modalShow, setModalShow] = React.useState(false);
 // const [loggedIn,setLoggedIn] = React.useState(false);
  
  return (
    <>
      <Nav/>
      <LoginModal
        show={modalShow}//{modalShow || !loggedIn}
        onHide={() => setModalShow(false)}
      />

      <img class='col-md-12' src="data:image/jpeg;base64,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"></img>

      {companies.map((company) => {
        return(
          <div key={company.companyName} className='row m-2'>
            <h2>{company.companyName}</h2>
            <hr></hr>
            {company.jobRoles.map((role)=>{
              return(
                <>
              <div key={role.jobRole} className='col-md mb-3' onClick={() => setModalShow(true)}>
                <JobCard 
                  jobrole={role.jobRole}
                  description={role.description}
                  qualifications={role.qualifications}
                  duration={role.duration+"hours"}
                  pattern= {role.pattern}
                />
              </div>
                <Link to="/exam-details">ExamStartPage</Link>
              </>
            )})}
          </div>
        );
      })}
    </>
  );
}

export default LandingPage;

import React from 'react';

import JobCard from '../Components/JobCard'
import LoginModal from '../Components/LoginModal';

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
  //const [loggedIn,setLoggedIn] = React.useState(false);
  
  return (
    <>

      <LoginModal
        show={modalShow}//{modalShow || !loggedIn}
        onHide={() => setModalShow(false)}
      />

      {companies.map((company) => {
        return(
          <div key={company.companyName} className='row m-2'>
            <h2>{company.companyName}</h2>
            <hr></hr>
            {company.jobRoles.map((role)=>{
              return(
              <div key={role.jobRole} className='col-md mb-3' onClick={() => setModalShow(true)}>
                <JobCard 
                  jobrole={role.jobRole}
                  description={role.description}
                  qualifications={role.qualifications}
                  duration={role.duration+"hours"}
                  pattern= {role.pattern}
                />
              </div>
            )})}
          </div>
        );
      })}
    </>
  );
}

export default LandingPage;

import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

import JobCard from '../Components/JobCard'
import LoginModal from '../Components/LoginModal';
import Nav from "../Components/Nav";
import './LandingPage.css'

function LandingPage() {
  const [fade,setFade]=useState(false)
  useEffect(()=>{
    fetchCompanyRoles();
    setFade(true);
  },[]);
  const [companies,setCompanies]=useState([]);
  
  const fetchCompanyRoles = async () => {
    const data=await fetch('/home');
    const comps= await data.json();
    setCompanies(comps);
  };

  const [modalShow, setModalShow] = React.useState(false);
  const [destination,setDestination]=useState("/home");
  
 function checkLogin(e,id){
  if(localStorage.getItem('userid')==null){
    setDestination(id);
    setModalShow(true);
    e.preventDefault();
  }
}

  return (
    <div className={(fade)?"fade-in":"fade-out"}>
      <Nav/>
      <LoginModal
        show={modalShow}//{modalShow || !loggedIn}
        onHide={() => setModalShow(false)}
        destination={destination}
      />

      <img
        className='col-md-12'
        src="https://t3.ftcdn.net/jpg/02/42/51/64/360_F_242516484_a6lXwdIdh4ofJcStbpQ45BMCfsR9igT8.jpg"
        height={500}
      ></img>

      {companies.map((company) => {
        return(
          <div key={company.companyName} className='row m-2'>
            <h2>{company.companyName}</h2>
            <hr></hr>
            {company.jobRoles.map((role)=>{
              return(
                <>
                  <Link to={"/exam-details/"+role.id} key={role.id} className='col-md mb-3 text-dark' onClick={(event) => checkLogin(event,role.id)}>
                    <JobCard 
                    jobrole={role.jobRole}
                    description={role.description}
                    qualifications={role.qualifications}
                    duration={role.duration+" hours"}
                    no_qs= {role.no_qs}
                    />
                  </Link>
                </>
            )})}
          </div>
        );
      })}
    </div>
  );
}

export default LandingPage;

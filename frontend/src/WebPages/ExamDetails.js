import React,{ Component,useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

function ExamDetails(){
    const {id} = useParams();
    
    useEffect(()=>{
        fetchData();
    },[]);

    const [jobRole,setJobRole]=useState({});
   
    const fetchData = async () => {
    const role= await fetch('/exam-details/'+id);
    const data= await role.json();
    setJobRole(data);
    }

    return(
        <>
            <h1>{jobRole.roleName}</h1>
            <div className="h3 my-3">Description: <br></br>{jobRole.description}</div>
            <div className="h3 my-3">Qualification: <br></br>{jobRole.qualifications}</div>
            {/* <div className="h3">Payscale: {jobRole.payScale[0]} - {jobRole.payScale[1]}</div> */}
            <Link to="/exam" className="btn btn-primary rounded">Start Exam</Link>
        </>
    );
}

export default ExamDetails;
import React,{ Component,useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from 'axios';


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

    function checkQualifications(e){
        var d=new Date().toISOString().slice(0, 10);
        Axios.post('http://localhost:5000/qualifications',{
            exam_id: id,
            user_id: localStorage.getItem('userid'),
            date_attempted: d
        }).then((res)=>{
            var qualified=res.data.qualified;
            localStorage.setItem("qualified",qualified);
            if(qualified==false){
                e.preventDefault();
                alert("you do not have the necesary qualifications to attempt this exam");
            }
            else if(qualified=='recent'){
                e.preventDefault();
                alert("you have recently attempted this exam");
            }
        });
    }

    if(jobRole.roleName!=null && localStorage.getItem('userid')!=null){
        return(
            <>
                <h1>{jobRole.roleName}</h1>
                <div className="h3 my-3">Description: <br></br>{jobRole.description}</div>
                <div className="h3 my-3">Qualification: <br></br>{jobRole.qualifications}</div>
                <div className="h3">Payscale: {jobRole.payScale[0]} - {jobRole.payScale[1]}</div>
                <Link to={"/exam/"+id} className="btn btn-primary rounded" onClick={(e)=>checkQualifications(e)}>Start Exam</Link>
            </>
        )
    }
}

export default ExamDetails;
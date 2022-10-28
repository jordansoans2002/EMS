import React, { useEffect, useState } from "react";
import './question.css';
import InfoBar from "../Components/InfoBar";
import Axios from 'axios';
import { Link, useParams } from "react-router-dom";
import Nav from "../Components/Nav";

function Exam(props){
    const {id}= useParams();
    const [timeUp,setTimeUp]=useState(false);
   
    useEffect(()=>{
        fetchQuestions();
    },[]);
    const [exam,setExam]=React.useState({
        name:"Exam Name",
        marks:0,
        duration:36000,
        questions:[
            {
                multi: false,
                opt: ["Option a", "Option b", "Option c", "Option d"],
                qs: "Question",
                selected: [],
                solution: [""],
                marks:0
            }
        ]
    });

    const fetchQuestions = async() => {
        const data= await fetch('/exam/'+id);
        //const ques= await data.json();
        setExam(await data.json());
        setQsNo(0);
    }

    const [qsNo,setQsNo]=React.useState(0);
    //const [question,setQuestion]=React.useState(exam.questions[qsNo]);
    const question=exam.questions[qsNo];

    function move(n){
        if((n===1 && qsNo<exam.questions.length-1) || (n===-1 && qsNo>0))
            loadQuestion(qsNo+n);
    }
    function loadQuestion(n){
        if(n>=0 && n<exam.questions.length){
            setQsNo(n);
            //setQuestion(exam.questions[qsNo]);
        }
    }
    function isSelected(option){
        var selected=question.selected;
        var pos=selected.indexOf(option);
        if(pos !== -1){
            selected.splice(pos,1);
        }
        else
            (question.multi)? selected.push(option): selected[0]=option;
        question.selected=selected;
        return question.selected;
    }

    function submit(){
        var marks=0;
        for(var i=0;i<exam.questions.length;i++){
            for(var j=0;j<exam.questions[i].selected.length;j++){
                
                if(exam.questions[i].solution.includes(exam.questions[i].selected[j]))
                    {marks+=exam.questions[i].marks/exam.questions[i].solution.length;console.log(exam.questions[i].marks)}
                else{
                    marks=0;
                    break;
                }
            }
        }
        Axios.post('http://localhost:5000/exam',{
            user_id:localStorage.getItem('userid'),
            exam_id:id,
            marks: marks,
        })
        localStorage.setItem("qualified",'recent');
    }
    function Options(){
        const [selected,setSelected] =React.useState(question.selected);
        return(
            <>
                {question.opt.map((option)=>{
                    if(option===''||option===null)return;//to filter blank options
                    return(
                        <div key={option} className="options col-md-10" onClick={()=>{setSelected([isSelected(option)])}}>
                            <div className={(question.selected.includes(option))?"bg-primary":"bg-light"}>
                                {option}
                            </div>
                        </div>
                    );
                })}
            </>
        );
    } 
    if(exam.name!="Exam Name" && localStorage.getItem('userid')!=null && localStorage.getItem("qualified")=='true'){
        return(
            <>
                <InfoBar name={exam.name} time={exam.duration} setTimeUp={setTimeUp} questions={exam.questions.length}></InfoBar>
                <div id='container' className='col-md-10'>
                    <div className='header'>
                        {props.name}
                        <input id='qNo' type='number' className="col-md-2" value={qsNo+1} min='1' max={exam.questions.length} onChange={(n)=>{loadQuestion(n.target.valueAsNumber-1)}}></input>
                    </div>

                    <div id='qs-container' className="col-md-12">
                        <div id='prev' className="move col-md-1" onClick={()=>move(-1)}>&lt;</div>

                        <div id="question" className="col-md-10">
                            <div id="qs" className="col-md-10">
                                {question.qs}
                            </div>
                            <div id="ans">
                                <Options/>
                            </div>
                        </div>

                        <div id="next" className="move col-md-1" onClick={()=>move(1)}>&gt;</div>
                    </div>
                </div>
                <div className="d-flex justify-content-center m-5">
                    <Link to={"/result"} className="btn btn-outline-primary btn-lg rounded" onClick={()=>submit()}>Submit</Link>
                </div>
            </>
        );
    }
    else{
        <Nav/>
    }
}
export default Exam;
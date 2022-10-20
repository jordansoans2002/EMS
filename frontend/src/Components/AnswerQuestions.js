import React, { useEffect } from "react";
import './question.css';
import InfoBar from "./InfoBar";

const exam2=
        {
            name:"Software",
            marks:0,
            duration:3600,
            questions:[
                {
                    multi: false,
                    opt: ["a", "b", "c", "d"],
                    qs: "who",
                    selected: [],
                    solution: ["a"]
                }, {
                    multi: false,
                    opt: ["a", "b", "c", "d"],
                    qs: "what",
                    selected: [],
                    solution: ["b"]
                }, {
                    multi: false,
                    opt: ["a", "b", "c", "d"],
                    qs: "where",
                    selected: [],
                    solution: ["c"]
                }, {
                    multi: false,
                    opt: ["a", "b", "c", "d"],
                    qs: "why",
                    selected: [],
                    solution: ["d"]
                }, {
                    multi: true,
                    opt: ["a", "b", "c", "d"],
                    qs: "how",
                    selected: [],
                    solution: ["a", "b", "c", "d"]
                }
            ]
        };

function AnswerQuestions(props){
    useEffect(()=>{
        fetchQuestions();
    },[]);
    const [exam,setExam]=React.useState({});

    const fetchQuestions = async() => {
        const data= await fetch('/exam');
        const ques= await data.json();
        setExam(ques);
        console.log('exam loaded');
    }

    const [qsNo,setQsNo]=React.useState(0);
    console.log(exam);
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
            console.log(exam.questions[qsNo]);
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
    function Options(){
        const [selected,setSelected] =React.useState(question.selected);
        console.log('options loaded'+selected);
        return(
            <>
                {question.opt.map((option)=>{
                    return(
                        <div key={option} className="options col-md-10" onClick={()=>{setSelected([isSelected(option)])}}>
                            <div className={(question.selected.includes(option))?"bg-primary":"bg-light"}>
                                {option}
                            </div>
                            {/* <Option val={option} select={selected.includes(option)}/> */}
                            {console.log("from option" + selected.includes(option))}
                        </div>
                    );
                })}
            </>
        );
    } 
    return(
        <>
            <InfoBar name={exam.name} time={exam.duration} questions={exam.questions.length}></InfoBar>
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
                <button className="btn btn-outline-primary btn-lg rounded">Submit</button>
            </div>
        </>
    );
}
export default AnswerQuestions;
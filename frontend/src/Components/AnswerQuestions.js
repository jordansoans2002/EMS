import React from "react";
import './answerQuestion.css';
import Option from './Option';


const exam=
        {
            marks:0,
            duration:1,
            questions:[
                {
                    input: "",
                    multi: false,
                    opt: ["a", "b", "c", "d"],
                    qs: "who",
                    req: false,
                    selected: [],
                    solution: ["a"]
                }, {
                    input: "",
                    multi: false,
                    opt: ["a", "b", "c", "d"],
                    qs: "what",
                    req: false,
                    selected: [],
                    solution: ["b"]
                }, {
                    input: "",
                    multi: false,
                    opt: ["a", "b", "c", "d"],
                    qs: "where",
                    req: false,
                    selected: [],
                    solution: ["c"]
                }, {
                    input: "",
                    multi: false,
                    opt: ["a", "b", "c", "d"],
                    qs: "why",
                    req: false,
                    selected: [],
                    solution: ["d"]
                }, {
                    input: "",
                    multi: true,
                    opt: ["a", "b", "c", "d"],
                    qs: "how",
                    req: false,
                    selected: [],
                    solution: ["a", "b", "c", "d"]
                }
            ]
        }
function AnswerQuestions(props){
    //const [exam,setExam]=React.useState({});
    //setExam(
    /*const exam=
        {
            marks:0,
            duration:1,
            questions:[
                {
                    input: "",
                    multi: false,
                    opt: ["a", "b", "c", "d"],
                    qs: "who",
                    req: false,
                    selected: [],
                    solution: ["a"]
                }, {
                    input: "",
                    multi: false,
                    opt: ["a", "b", "c", "d"],
                    qs: "what",
                    req: false,
                    selected: [],
                    solution: ["b"]
                }, {
                    input: "",
                    multi: false,
                    opt: ["a", "b", "c", "d"],
                    qs: "where",
                    req: false,
                    selected: [],
                    solution: ["c"]
                }, {
                    input: "",
                    multi: false,
                    opt: ["a", "b", "c", "d"],
                    qs: "why",
                    req: false,
                    selected: [],
                    solution: ["d"]
                }, {
                    input: "",
                    multi: true,
                    opt: ["a", "b", "c", "d"],
                    qs: "how",
                    req: false,
                    selected: [],
                    solution: ["a", "b", "c", "d"]
                }
            ]
        }*/
    //);
    const [qsNo,setQsNo]=React.useState(0);
    console.log(exam+" "+qsNo);
    //const [question,setQuestion]=React.useState(exam.questions[qsNo]);
    const question=exam.questions[qsNo];

    function move(n){
        console.log('moved');
        if(n==1 && qsNo<exam.questions.length-1)
            loadQuestion(qsNo+1);
        else if(n==-1 && qsNo>0)
            loadQuestion(qsNo-1);
    }
    function loadQuestion(n){
        if(n>=0 && n<exam.questions.length){
            setQsNo(n);
            //setQuestion(exam.questions[qsNo]);
            console.log(exam.questions[qsNo]);
        }
    }
    function selected(option){
        var selected=question.selected;
        var pos=selected.indexOf(option);
        if(pos != -1){
            selected.splice(pos,1);
        }
        else
            (question.multi)? selected.push(option): selected[0]=option;
    } 
    return(
        <>
            <div id='container' className='col-md-10'>
                <div className='header'>
                    {props.name}
                    <input id='qNo' type='number' className="col-md-2" min='1' onChange={(value)=>{loadQuestion(value)}}></input>
                </div>

                <div id='qs-container' className="col-md-12">
                    <div id='prev' className="move col-md-1" onClick={()=>move(-1)}>&lt;</div>
                    
                    <div id="question" className="col-md-10">
                        <div id="qs" className="col-md-10">
                            {question.qs}
                        </div>
                        <div id="ans">
                            {question.opt.map((option)=>{
                                return(
                                    <div key={option} className="options col-md-10" onClick={()=>selected(option)}>
                                        <Option val={option} select={question.selected.includes(option)}/>
                                        {console.log("from option" + question.selected.includes(option))}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    
                    <div id="next" className="move col-md-1" onClick={()=>move(1)}>&gt;</div>
                </div>
            </div>
        </>
    );
}
export default AnswerQuestions;
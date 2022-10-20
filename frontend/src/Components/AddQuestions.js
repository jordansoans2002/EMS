import React from 'react';
import './question.css';

const exam=
        {
            marks:0,
            duration:1,
            questions:[
                {
                    input: "",
                    multi: false,
                    opt: [],
                    qs: "",
                    req: false,
                    selected: [],
                    solution: []
                }
            ]
        }

function AddQuestions(props){
    console.log(exam);
    //const [question,setQuestion]=React.useState(exam.questions[0]);
    const [qsNo,setQsNo]=React.useState(0);
    var question=exam.questions[qsNo];

    function move(n){
        getOptions();
        if(n===1 && qsNo === exam.questions.length-1 && question.qs !== '' ){
            console.log('create blank');
            exam.questions.push({
                input: "",
                multi: false,
                opt: [],
                qs: "",
                req: false,
                selected: [],
                solution: []
            });
            n=qsNo+1;
        }
        else if((n===1 && qsNo < exam.questions.length-1) || (n===-1 && qsNo>0))
            n=qsNo+n;
        else
            n=qsNo;
        loadQuestion(n);
    }
    function loadQuestion(n){
        if(n>=0 && n<exam.questions.length){
            //setQuestion(exam.questions[qsNo]);
            setQsNo(n);
            //document.getElementById('qs').value=exam.questions[n];
        }
    }
    function isSolution(option){
        if(option=='' || option==null) return;
        var solution=question.solution;
        var pos=solution.indexOf(option);
        if(pos != -1)
            solution.splice(pos,1);
        else
            solution.push(option);
        
        question.multi=solution.length>0;
        question.solution=solution;
    }
    function getOptions(){
        var opts=[];
        for(var i=0;i<4;i++){
            //console.log(document.getElementById('i').innerhtml());
            var opt=document.getElementById('opt'+i).value;
            if(opt!='')
                opts.push(opt);
        }
        question.opt=opts;
    }
    function Options(){
        const [solution,setSolution]=React.useState(question.solution);
        var opts=Array(4).fill("");
        for(var i=0;i<4;i++){
            if(question.opt[i]!='' && question.opt[i]!=null)
                opts[i]=question.opt[i];
            else
                opts[i]='';
        }
        i=0;
        return(
            <>
                {opts.map((option)=>{
                    return(
                        <div key={i++} className="options col-md-10" onClick={()=>{setSolution([isSolution(option)])}}>
                            <input 
                                id={"opt"+i}
                                className={(question.solution.includes(option))?"bg-success col-12":"bg-light col-12"}
                                defaultValue={option}
                                onChange={()=>{getOptions()}}>
                            </input>
                        </div>
                    );
                })}
            </>
        );
    }
    return(
        <>
            <div id='container' className='col-md-10'>
                <div className='header'>
                    {props.name}
                    <input id='qNo' type='number' className="col-md-2" value={qsNo+1} min='1' max={exam.questions.length} onChange={(n)=>{loadQuestion(n.target.value)}}></input>
                </div>

                <div id='qs-container' className="col-md-12">
                    <div id='prev' className="move col-md-1" onClick={()=>move(-1)}>&lt;</div>
                    
                    <div id="question" className="col-md-10">
                        <input id='qs' className="col-12" defaultValue={question.qs} onChange={(q)=>{question.qs=q.target.value}}></input>
                        {/* <div id="qs" className="col-md-12">
                        </div> */}
                        <div id="ans">
                            <Options/>
                        </div>
                    </div>
                    
                    <div id="next" className="move col-md-1" onClick={()=>move(1)}>&gt;</div>
                </div>
            </div>
        </>
    );
}

export default AddQuestions;
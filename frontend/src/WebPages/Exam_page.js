import React,{useEffect} from "react";
import InfoBar from "../Components/InfoBar";
import AnswerQuestions from "./Exam";

// const exam={
//     examName:"Software Engineer",
//     duration:"3600",
//     questions:5
// }
function Exam(){
    // useEffect(()=>{
    //     fetchQuestions();
    // },[]);
    // const [exam,setExam]=React.useState({});

    // const fetchQuestions = async() => {
    //     const data= await fetch('/exam');
    //     const ques= await data.json();
    //     setExam(ques);
    //     console.log('exam loaded');
    // }
    const [timeUp,setTimeUp]=React.useState(false);
    return(
        <>
            <AnswerQuestions />
        </>
    );
}

export default Exam;
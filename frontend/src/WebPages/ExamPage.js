import React from "react";
import InfoBar from "../Components/InfoBar";
import AnswerQuestions from "../Components/AnswerQuestions";

const exam={
    examName:"Software Engineer",
    duration:"3600",
    questions:5
}
function ExamPage(){
    const [timeUp,setTimeUp]=React.useState(false)
    return(
        <>
            <InfoBar name={exam.examName} time={exam.duration} questions={exam.questions}></InfoBar>
            <AnswerQuestions name={exam.examName}/>
        </>
    );
}

export default ExamPage;

const jobRole={
    roleName:'Web Developer',
    description:'Same description as that on the job card or maybe a more descriptive version',
    qualifications:['B.E','Experience'],
    payScale:[10000,20000]
}
function ExamStartPage(props){
    
    return(
        <>
            <h1>{jobRole.roleName}</h1>
            <div className="h3">Description: <br></br>{jobRole.description}</div>
            <div className="h3">Qualification: <br></br>{jobRole.qualifications}</div>
            <div className="h3">Payscale: {jobRole.payScale[0]} - {jobRole.payScale[1]}</div>
            <button className="btn btn-primary rounded">Start Exam</button>
        </>
    );
}

export default ExamStartPage;
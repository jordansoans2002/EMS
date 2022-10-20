const express = require('express');
const router = express.Router();

router.get('/home',(req,res)=>{
    const companies=[
        {
          companyName:'Company 1',
          jobRoles:[
            {jobRole:'Job Role 1',
            description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
            qualifications:'Qualifications required' ,
            duration:'1 ' ,
            pattern:'mcq'},
            {jobRole:'Job Role 2',
            description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
            qualifications:'Qualifications required' ,
            duration:'1 ' ,
            pattern:'mcq'},
            {jobRole:'Job Role 3',
            description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
            qualifications:'Qualifications required' ,
            duration:'1 ' ,
            pattern:'mcq'},
            {jobRole:'Job Role 4',
            description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
            qualifications:'Qualifications required' ,
            duration:'1 ' ,
            pattern:'mcq'},
            {jobRole:'Job Role 5',
            description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
            qualifications:'Qualifications required' ,
            duration:'1' ,
            pattern:'mcq'},
            {jobRole:'Job Role 6',
            description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
            qualifications:'Qualifications required' ,
            duration:'1' ,
            pattern:'mcq'}
          ]
        },
        {
          companyName:'Company 2',
          jobRoles:[
            {jobRole:'Job Role 1',
            description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
            qualifications:'Qualifications required' ,
            duration:'1 hour' ,
            pattern:'mcq'},
            {jobRole:'Job Role 2',
            description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
            qualifications:'Qualifications required' ,
            duration:'1 hour' ,
            pattern:'mcq'},
            {jobRole:'Job Role 3',
            description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
            qualifications:'Qualifications required' ,
            duration:'1 hour' ,
            pattern:'mcq'}
          ]
        },
        {
          companyName:'Company 3',
          jobRoles:[
            {jobRole:'Job Role 1',
            description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
            qualifications:'Qualifications required' ,
            duration:'1 hour' ,
            pattern:'mcq'},
            {jobRole:'Job Role 2',
            description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
            qualifications:'Qualifications required' ,
            duration:'1 hour' ,
            pattern:'mcq'},
            {jobRole:'Job Role 3',
            description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
            qualifications:'Qualifications required' ,
            duration:'1 hour' ,
            pattern:'mcq'}
          ]
        }
    ];
    res.end(JSON.stringify(companies));
});

// router.get('/exam-details/:exam',(req,res) => {

// }); 

router.get('/exam',(req,res)=>{
    const exam=
        {
            marks:0,
            duration:1,
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
        res.end(JSON.stringify(exam));
})
module.exports=router;
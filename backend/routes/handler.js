const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const router = express.Router();
const app = express();

app.use(cors());
app.use(express.json());

var db= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Water@123",
    database:"ems"
});

db.connect((err)=>{
    if(!err)
        console.log("success");
    else console.log(JSON.stringify(err,undefined,2));
});

app.post("/register",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE username=? and password=?",[username,password],
        (err,result,field)=>{
            if(result<0){
                db.query(
                    "INSERT INTO users (username,password) VALUES (?,?)",[username,password],
                    (err,result)=> {
                        if(err) console.log(err);
                        else send('values inserted');
                    }
                );
            }
        }
    );
});
            
app.post("/login",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    console.log(username,password);
    db.query(
        "SELECT * FROM users WHERE username=? and password=?",[username,password],
        (err,result,field)=> {
            if(err) console.log(err);
            else console.log(result);
        }
    );
})

router.get('/home',(req,res)=>{
    var companies=[];
    
    db.query(
        "SELECT * FROM companies",
        (err,rows,field)=>{
            if(err) console.log(err);
            else{
                for(var i=0;i<rows.length;i++){
                    var rolesArr=[];//rolesArr.splice(0,rolesArr.length);
                    db.query("SELECT * FROM job_roles WHERE company_id=?",[rows[i].id],(err,roles,field)=>{
                        for(var j=0;j<roles.length;j++){
                            rolesArr.push({
                                jobRole:roles[j].role_name,
                                description:roles[j].description,
                                qualifications:roles[j].qualifications,
                                duration:roles[j].duration,
                                qnos:roles[j].no_qs
                            });
                        }
                    });
                    //rolesArr is visble inside the query but not  outside
                    console.log(rolesArr);
                    companies.push({
                        companyName:rows[i].name,
                        jobRoles:rolesArr
                    });         
                }
            }
            console.log(companies);
            res.end(JSON.stringify(companies));
        }
    );
});

// router.get('/home',(req,res)=>{
//     const companies=[
//         {
//           companyName:'Company 1',
//           jobRoles:[
//             {jobRole:'Job Role 1',
//             description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
//             qualifications:'Qualifications required' ,
//             duration:'1 ' ,
//             pattern:'mcq'},
//             {jobRole:'Job Role 2',
//             description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
//             qualifications:'Qualifications required' ,
//             duration:'1 ' ,
//             pattern:'mcq'},
//             {jobRole:'Job Role 3',
//             description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
//             qualifications:'Qualifications required' ,
//             duration:'1 ' ,
//             pattern:'mcq'},
//             {jobRole:'Job Role 4',
//             description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
//             qualifications:'Qualifications required' ,
//             duration:'1 ' ,
//             pattern:'mcq'},
//             {jobRole:'Job Role 5',
//             description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
//             qualifications:'Qualifications required' ,
//             duration:'1' ,
//             pattern:'mcq'},
//             {jobRole:'Job Role 6',
//             description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
//             qualifications:'Qualifications required' ,
//             duration:'1' ,
//             pattern:'mcq'}
//           ]
//         },
//         {
//           companyName:'Company 2',
//           jobRoles:[
//             {jobRole:'Job Role 1',
//             description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
//             qualifications:'Qualifications required' ,
//             duration:'1 hour' ,
//             pattern:'mcq'},
//             {jobRole:'Job Role 2',
//             description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
//             qualifications:'Qualifications required' ,
//             duration:'1 hour' ,
//             pattern:'mcq'},
//             {jobRole:'Job Role 3',
//             description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
//             qualifications:'Qualifications required' ,
//             duration:'1 hour' ,
//             pattern:'mcq'}
//           ]
//         },
//         {
//           companyName:'Company 3',
//           jobRoles:[
//             {jobRole:'Job Role 1',
//             description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
//             qualifications:'Qualifications required' ,
//             duration:'1 hour' ,
//             pattern:'mcq'},
//             {jobRole:'Job Role 2',
//             description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
//             qualifications:'Qualifications required' ,
//             duration:'1 hour' ,
//             pattern:'mcq'},
//             {jobRole:'Job Role 3',
//             description:'Something will be written about this job role. The description will be allotted a max number of characters to fit within the card.' ,
//             qualifications:'Qualifications required' ,
//             duration:'1 hour' ,
//             pattern:'mcq'}
//           ]
//         }
//     ];
//     res.end(JSON.stringify(companies));
// });

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
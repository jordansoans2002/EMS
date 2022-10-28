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
    if(!err) console.log("success");
    else console.log(JSON.stringify(err,undefined,2));
});

router.get('/home',(req,res)=>{
    var companies=[];
    db.query(
        "select * from ems.job_roles join ems.companies on job_roles.company_id=companies.id order by ems.job_roles.company_id;",
        (err,rows,field)=>{
            if(err) console.log(err)
            else{
                var arr=[];
                for(var i=0;i<=rows.length;i++){
                    if(i==rows.length||(i>0 && rows[i].company_id!=rows[i-1].company_id)){
                        companies.push({
                            companyName:rows[i-1].name,
                            jobRoles:arr
                        })
                        arr=[];
                        if(i==rows.length) break;
                    }
                    arr.push({
                        id:rows[i].role_id,
                        jobRole:rows[i].role_name,
                        description:rows[i].description,
                        qualifications:rows[i].qualifications,
                        duration:rows[i].duration,
                        no_qs:rows[i].no_qs
                    });
                }
            }
            res.end(JSON.stringify(companies));
        }
    );
});

router.get('/profile',(req,res)=>{
    c
})

router.get('/exam-details/:id',(req,res)=>{
    const roleId=req.params.id;
    db.query("SELECT * FROM job_roles where role_id=?",[roleId],
    (err,row,field)=>{
        if(err) console.log(err);
        var jobRole={
            roleName:row[0].role_name,
            description:row[0].description,
            qualifications:row[0].qualifications,
            payScale:row[0].pay_scale.split(',')
        }
        res.end(JSON.stringify(jobRole));
    })
})

router.get('/exam/:id',(req,res)=>{
    const id=req.params.id;
    db.query("SELECT * FROM ems.exam where exam_id=? order by question_id",[id],
    (err,rows,field)=>{
        if(err) console.log(err);
        var questions=[];
        for(var i=0;i<rows.length;i++){
            questions.push({
                opt:[rows[i].a,rows[i].b,rows[i].c,rows[i].d],
                qs:rows[i].question,
                solution:rows[i].solution.split("",4),
                multi:rows[i].length>1,
                selected:[],
                marks:rows[i].marks
            });
        }
        const exam={
            name:rows[0].exam_name,
            marks:5,
            duration:rows[0].duration,
            questions:questions
        }
        res.end(JSON.stringify(exam));
    })//make database
    // const exam={
    //     marks:0,
    //     duration:1,
    //     questions:[
    //         {
    //             multi: false,
    //             opt: ["a", "b", "c", "d"],
    //             qs: "who",
    //             selected: [],
    //             solution: ["a"]
    //         }
    //     ]
    // };
    
})

//unused no call from frontend
router.get('/result/:id',(req,res)=>{
    const exam_id=req.params.id;
    db.query("SELECT marks FROM results where user_id=? and exam_id=?",[2,exam_id],
    (err,rows,fields)=>{
        var result;
        if(err) console.log(err);
        else if(rows.length>0)
            result=rows[0].marks;
        res.end(JSON.stringify(result));
    })
})

module.exports=router;
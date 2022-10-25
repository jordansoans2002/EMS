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

//router.get('/exam-details',(req,res)=>console.log("Hello"))
router.get('/exam-details/:id',(req,res)=>{
    const roleId=req.params.id;
    db.query("SELECT * FROM job_roles where role_id=?",[roleId],
    (err,row,field)=>{
        if(err) console.log(err);
        var jobRole={
            roleName:row[0].role_name,
            description:row[0].description,
            qualifications:row[0].qualifications,
            payScale:[10000,20000]
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
            //var opt=rows[i].
            questions.push({
                opt:[rows[i].a,rows[i].b,rows[i].c,rows[i].d],
                qs:rows[i].question,
                solution:rows[i].solution.split("",4),
                multi:false,
                selected:[]
            });
        }
        const exam={
            marks:5,
            duration:rows[0].duration,
            questions:questions
        }
        console.log(exam);
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

//app.post("/register",(req,res)=>{
    //     const username = req.body.username;
    //     const password = req.body.password;
    
    //     db.query(
    //         "SELECT * FROM users WHERE username=? and password=?",[username,password],
    //         (err,result,field)=>{
    //             if(result==0){
    //                 db.query(
    //                     "INSERT INTO users (username,password) VALUES (?,?)",[username,password],
    //                     (err,res)=> {
    //                         if(err) console.log(err);
    //                         else send(res);
    //                     }
    //                 );
    //             }
    //         }
    //     );
    // });
                
    // app.post("/login",(req,res)=>{
    //     const username = req.body.username;
    //     const password = req.body.password;
    //     console.log(username,password);
    //     db.query(
    //         "SELECT * FROM users WHERE username=? and password=?",[username,password],
    //         (err,result,field)=> {
    //             if(err) console.log(err);
    //             else console.log(result);
    //         }
    //     );
    // })

module.exports=router;
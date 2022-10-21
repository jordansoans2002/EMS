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
        "select * from ems.job_roles order by ems.job_roles.company_id",
        (err,rows,field)=>{
            if(err) console.log(err)
            else{
                var arr=[];
                for(var i=0;i<=rows.length;i++){
                    if(i==rows.length||(i>0 && rows[i].company_id!=rows[i-1].company_id)){
                        companies.push({
                            companyName:rows[i-1].company_id,
                            jobRoles:arr
                        })
                        arr=[];
                        if(i==rows.length) break;
                    }
                    arr.push({
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

router.get('/exam',(req,res)=>{
    const exam={
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
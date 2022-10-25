const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js')

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',routesHandler);
app.use(cors());
app.use(express.json());

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('server is running on port '+ PORT);
});

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
            if(result==0){
                db.query(
                    "INSERT INTO users (username,password) VALUES (?,?)",[username,password],
                    (err,res)=> {
                        if(err) console.log(err);
                        else console.log(res);
                    }
                );
                res.send("Successfully registered");
            }
            else res.send("username already exists");
        }
    );
});
            
app.post("/login",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    db.query(
        "SELECT * FROM users WHERE username=? and password=?",[username,password],
        (err,result,field)=> {
            if(err) console.log('error');
            else{
                if(result.length>0 &&result[0].username==username&&result[0].password==password)
                    res.send({valid:true,id:result[0].id});
                else
                    res.send({valid:false});
            }
        }
    );
});

app.post("/exam",(req,res)=>{
    const user_id=req.body.user_id;
    const exam_id=req.body.exam_id;
    const marks=req.body.marks;
    db.query("UPDATE results SET user_id=?,exam_id=?,marks=? WHERE id=?",[user_id,exam_id,marks,exam_id+"_"+user_id],
    (err,res)=>{
        if(err) console.log(err);
    })
})

app.post("/qualifications",(req,res)=>{
    const user_id=req.body.user_id;
    const exam_id=req.body.exam_id;
    const date=req.body.date_attempted;
    db.query("SELECT users.qualifications,job_roles.qualifications AS req FROM users,job_roles WHERE ROLE_ID=? AND id=?",[exam_id,user_id],
    (err,rows,fields)=>{
        if(err) console.log(err);
        var req=rows[0].req.split(",");
        var have=rows[0].qualifications.split(",");
        var q=true;
        for(var i=0;i<req.length;i++){
            if(have.includes(req[i]))
                continue;
            q=false;
            break;
        }

        if(q){
            db.query("INSERT INTO results (id,user_id,exam_id,date_attempted) VALUES (?,?,?,?)",[exam_id+"_"+user_id,user_id,exam_id,date],
            (err,ress)=>{
                if(err && err.code=="ER_DUP_ENTRY"){
                    q='recent';
                }
                res.send({qualified:q});
            })
        }
        else
            res.send({qualified:q});
    })
});
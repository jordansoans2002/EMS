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

// var db= mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"Water@123",
//     database:"ems"
// });

// db.connect((err)=>{
//     if(!err)
//         console.log("success");
//     else console.log(JSON.stringify(err,undefined,2));
// });

// app.post("/register",(req,res)=>{
//     const username = req.body.username;
//     const password = req.body.password;

//     db.query(
//         "SELECT * FROM users WHERE username=? and password=?",[username,password],
//         (err,result,field)=>{
//             if(result<0){
//                 db.query(
//                     "INSERT INTO users (username,password) VALUES (?,?)",[username,password],
//                     (err,result)=> {
//                         if(err) console.log(err);
//                         else send('values inserted');
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
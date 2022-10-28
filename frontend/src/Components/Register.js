import React,{useState} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';



function Register(props){
    const [username,setUsername]=React.useState("");
    const [password,setPassword]=React.useState("");
    const [confPassword,setConfPassword]=React.useState("");
    const [name,setName]=React.useState("");
    const [qualifications,setQualifications]=React.useState("");  

    const registerUser=()=>{
        if(username===''||username==null)
            alert("Empty username")
        else if(password.length<5)
            alert("password must be atleast 5 characters");
        else if(!password.match(/[A-Za-z0-9]{5,20}$/))
            alert("password must have one letter, one symbol and one digit");
        else if(password!==confPassword || password=='' || password==null){
            alert("password is not matching");
        }
        else if(name==null||name=='')
            alert("enter your name");
        else if(qualifications==''|| qualifications==null)
            alert("enter your latest qualification");
        else{
            Axios.post('http://localhost:5000/register',{
                username: username,
                password: password,
                name:name,
                qualifications:qualifications
            }).then((res)=>{
                var err=res.data.err;
                if(err=='dup')
                    alert("This username is taken");
            })
            
        }
    }
    return(
        <>
            <div className='input-group-lg' onSubmit={() => alert('add to database')}>
                
                <input className='col-md-10 m-3' type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)}></input>
                <input className='col-md-10 m-3' type="text" placeholder='Qualifications' onChange={(e)=>setQualifications(e.target.value)}></input>
                <input className='col-md-10 m-3' type="text" placeholder='User Name' onChange={(e)=>setUsername(e.target.value)}></input>
                <input className='col-md-10 m-3' type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></input>
                <input className='col-md-10 m-3' type='text' placeholder='Confirm Password' onChange={(e)=>setConfPassword(e.target.value)}></input>
                <Link to={"/home"/*profile page*/} className='btn btn-primary' onClick={registerUser}>Register</Link>
            </div>
        </>
    )
}
export default Register;
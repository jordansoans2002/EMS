import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Login(props){
    const [username,setUsername]=React.useState("");
    const [password,setPassword]=React.useState("");

    function loginUser(e){
        Axios.post('http://localhost:5000/login',{
            username: username,
            password: password
        }).then((res)=>{
            var valid=res.data.valid;
            if(valid)
                localStorage.setItem('userid',res.data.id);
            if(!res.data.valid){
                e.preventDefault();
                alert("invalid username password");
            }
        });
    }
    return(
        <>
            <div className='input-group-lg'>
                <input className='col-md-10 m-3' type="text" name="username" placeholder='User Name' onChange={(e)=>setUsername(e.target.value)}></input>
                <input className='col-md-10 m-3' type='password' name="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></input>
                <Link to={(props.destination==null)?"/home":"/exam-details/"+props.destination} className='btn btn-primary' onClick={(e)=>loginUser(e)}>Log in</Link>
            </div>
        </>
    )
}
export default Login;
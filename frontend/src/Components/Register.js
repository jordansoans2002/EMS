import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Register(props){
    const [username,setUsername]=React.useState("");
    const [password,setPassword]=React.useState("");
    const [confPassword,setConfPassword]=React.useState("");

    const registerUser=()=>{
        if(password===confPassword){
            Axios.post('http://localhost:5000/register',{
                username: username,
                password: password,
            });
            console.log('sent from frontend');
            /*if valid setLoggedIn true */
        }
        else{
            alert("password is not matching");
        }
    }
    return(
        <>
            <div className='input-group-lg' onSubmit={() => alert('add to database')}>
                <input className='col-md-10 m-3' type="text" placeholder='User Name' onChange={(e)=>setUsername(e.target.value)}></input>
                <input className='col-md-10 m-3' type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></input>
                <input className='col-md-10 m-3' type='text' placeholder='Confirm Password' onChange={(e)=>setConfPassword(e.target.value)}></input>
                <Link to={"/home"/*profile page*/} className='btn btn-primary' onClick={registerUser}>Register</Link>
            </div>
        </>
    )
}
export default Register;
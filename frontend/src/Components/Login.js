import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';

function Login(props){
    const [username,setUsername]=React.useState("");
    const [password,setPassword]=React.useState("");

    const loginUser=()=>{
        Axios.post('http://localhost:5000/login',{
            username: username,
            password: password
        });
    }
    return(
        <>
            <div className='input-group-lg'>
                <input className='col-md-10 m-3' type="text" name="username" placeholder='User Name' onChange={(e)=>setUsername(e.target.value)}></input>
                <input className='col-md-10 m-3' type='password' name="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></input>
                <Button className='primary' onClick={loginUser}>Log in</Button>
            </div>
        </>
    )
}
export default Login;
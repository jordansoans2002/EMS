import Button from 'react-bootstrap/Button';

function Login(props){
    return(
        <>
            <form className='input-group-lg'>
                <input className='col-md-10 m-3' type="text" name="username" placeholder='User Name'></input>
                <input className='col-md-10 m-3' type='password' name="password" placeholder='Password'></input>
                <Button type='submit' className='primary'>Log in</Button>
            </form>
        </>
    )
}
export default Login;
import Button from 'react-bootstrap/Button';

function Login(props){
    return(
        <>
            <form method='POST' onSubmit={() => alert('validate credentials')}>
                <input className='col-md-12' type="text" placeholder='User Name'></input><br></br><br></br>
                <input className='col-md-12' type='password' placeholder='Password'></input><br></br><br></br>
                <Button type='submit' className='primary'>Log in</Button>
            </form>
        </>
    )
}
export default Login;
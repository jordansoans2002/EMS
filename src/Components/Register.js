import Button from 'react-bootstrap/Button';

function Register(props){
    return(
        <>
            <form onSubmit={() => alert('add to database')}>
                <input className='col-md-12' type="text" placeholder='User Name'></input><br></br><br></br>
                <input className='col-md-12' type='password' placeholder='Password'></input><br></br><br></br>
                <input className='col-md-12' type='text' placeholder='Confirm Password'></input><br></br><br></br>
                <Button type='submit' className='primary'>Register</Button>
            </form>
        </>
    )
}
export default Register;
import Button from 'react-bootstrap/Button';

function Register(props){
    return(
        <>
            <form className='input-group-lg' onSubmit={() => alert('add to database')}>
                <input className='col-md-10 m-3' type="text" placeholder='User Name'></input>
                <input className='col-md-10 m-3' type='password' placeholder='Password'></input>
                <input className='col-md-10 m-3' type='text' placeholder='Confirm Password'></input>
                <Button type='submit' className='primary'>Register</Button>
            </form>
        </>
    )
}
export default Register;
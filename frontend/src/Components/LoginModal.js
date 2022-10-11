import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav'
import Login from './Login';
import Register from './Register';

function LoginModal(props) {
    const [register,setRegister] = React.useState(false);

    return (
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <Nav variant="pills" defaultActiveKey="Login" onSelect={(selectedKey) => {setRegister(selectedKey=='Register')}}>
                <Nav.Item>
                  <Nav.Link eventKey="Login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Register">Register</Nav.Link>
                </Nav.Item>
            </Nav>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {register? <Register></Register> :  <Login></Login>}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default LoginModal;
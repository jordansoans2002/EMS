import React from 'react';
import { Link } from 'react-router-dom';


import LoginModal from "./LoginModal";

function Nav(){
    const [modalShow,setModalShow]=React.useState(false);

    return(
        <>
            <LoginModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                  <Link to="/home" className="navbar-brand">
                    EMS
                  </Link>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      {
                        (localStorage.getItem('userid')==null)?
                          <button id="login-btn" className="btn btn-primary" onClick={() => setModalShow(true)}>Login or Register</button>:
                          <div className="dropdown">
                            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                              User
                            </button>
                            <ul className="dropdown-menu">
                              <li><Link to="/profile" className="dropdown-item">Profile</Link></li>
                              <li><a className="dropdown-item" onClick={()=>localStorage.removeItem('userid')}>Sign out</a></li>
                            </ul>
                          </div>
                      }
                    </li>
                  </ul>
                </div>
            </nav>
        </>
    );
}

export default Nav;
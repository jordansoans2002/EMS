import React from 'react';


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
                  <a className="navbar-brand" href="../WebPages/LandingPage">
                    EMS
                  </a>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <button id="login-btn" className="btn btn-primary" onClick={() => setModalShow(true)}>Login or Register</button>
                    </li>
                  </ul>
                </div>
            </nav>
        </>
    );
}

export default Nav;
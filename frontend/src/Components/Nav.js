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
            <nav class="navbar navbar-expand-sm bg-light">
                <div class="container-fluid">
                  <a class="navbar-brand" href="../WebPages/LandingPage">
                    EMS
                  </a>
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <button id="login-btn" class="btn btn-primary" onClick={() => setModalShow(true)}>Login or Register</button>
                    </li>
                  </ul>
                </div>
            </nav>
        </>
    );
}

export default Nav;
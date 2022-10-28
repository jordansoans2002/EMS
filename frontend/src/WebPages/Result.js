import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Nav from '../Components/Nav';

function Result() {

  function close() {
    localStorage.removeItem("userid");
    window.opener = null;
    window.open("about:blank", "_self");
    window.close();
  }
  if (localStorage.getItem('userid') != null) {
    return (
      <>
        <Nav />
        <div className='d-flex justify-content-center'>
          <div className='m-5 p-5 rounded bg-primary text-light col-5 text-center'>
            <h1>Congratulations!</h1>
            <h3>You have successfully submitted your exam</h3><br></br>
            <h6 className='text-right'>We will get back to you with your result. If you are selected you will be required to attend an interview and submit all relavent documents. All recruitment is up to company discretion.</h6>
            <img src="https://media.tenor.com/FMCDc-D7X68AAAAi/you-did-it-way-to-go.gif" width={100}></img>
          </div>
        </div>
        <div className="d-flex justify-content-center m-5">
          <Link to={"/home"} className="btn btn-outline-primary btn-lg rounded m-2">Home</Link>
          <button to={"/home"} className="btn btn-outline-primary btn-lg rounded m-2" onClick={() => { close() }}>Close</button>
        </div>
      </>
    );
  }
}
export default Result;
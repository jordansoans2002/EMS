import {  useState,useEffect } from "react";

function InfoBar(props){
   
    var time=props.time;
    const [count,setCount]=useState(time);
    useEffect(()=>{
        setTimeout(()=>{
            setCount(count-1);
        },1000);
    },[count]);

    return(
        <div className="mt-1 mb-2 p-4 bg-primary text-white rounded">
            <h2 className="d-flex justify-content-center m-1">{props.name}</h2>
            <div className="row mt-3 ">
                <div className="col d-flex justify-content-center">Time remaining 0{parseInt(count/3600)} : {parseInt((count/60)%60)} : {parseInt(count%60)}</div>
                <div className="col d-flex justify-content-center">Questions: {props.questions}</div>
            </div>
        </div>
    );
}
export default InfoBar;
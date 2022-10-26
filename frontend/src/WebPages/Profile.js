import { useEffect, useState } from "react";

function Profile(){
    useEffect(()=>{
        fetchProfile();
    },[]);

    const [profile,setProfile]=useState({});
    const fetchProfile = async()=>{
        const data=await fetch('/profile');
        setProfile(await data.json());
    }
    return(
        <>

        </>
    );
}
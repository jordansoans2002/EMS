import {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';

function Result(){
    const {id}=useParams();
    useEffect(()=>{
        fetchResult();
      },[]);
      const [result,setResult]=useState(0);
      
      const fetchResult = async () => {
        const data=await fetch('/result/'+id);
        const marks= await data.json();
        setResult(marks);
      };
    return(
        <h1>{result}</h1>
    );
}
export default Result;
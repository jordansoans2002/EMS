import React from "react";

function Option(props){
    const [selected,setSelected]=React.useState(false);
   
    return(
        <div className={(props.select)?"bg-primary":"bg-light"} onClick={()=>setSelected(!selected)}>
            {props.val}
        </div>
    );
}
export default Option;
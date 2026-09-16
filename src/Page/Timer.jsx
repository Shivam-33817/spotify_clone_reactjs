import { useEffect, useState } from "react";

function  Timer(){
const[ count, setcount]= useState(0);
useEffect (()=>{

    setTimeout(()=>{

        setcount(()=>count+3);
    } ,300);
})
return(

    <h1>lets chant sitaram {count}</h1>
)
}
export default Timer
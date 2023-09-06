import React from "react";
import add from './demo/person2'

  const Person1 =()=>{
    return (
       <>
       <ul>
        <li>sum of two no is {add(40,10)}</li>
        {/* <li>sub of two no is {sub(40,10)}</li>
        <li>Div of two no is {div(40,10)}</li>
        <li>Mult of two no is {mult(40,10)}</li> */}
       </ul>
       </> 
    )
  }
  export default Person1;
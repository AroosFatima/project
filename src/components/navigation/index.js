import React from "react";
import { Link } from "react-router-dom";
  export const Navigation =()=>{
  return(
    <>
 <nav className="bg-blue-500 p-4">
    <div className="max-w-4xl mx-auto flex justify-between items-center">
      <h1 className="text-white font-bold text-xl">Aroos Fatima</h1>
      <div>
        <button className="text-white px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"><Link  to={"/register"}>
              
           
          Login </Link>
       </button>
       <button className="text-blue-600 px-4 py-2 rounded-md bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 ml-2"><Link  to={"/login"}>
              
           
               
         Register</Link>
       </button> 
      </div>
   </div>
   </nav> 

   
</>
  )
  }
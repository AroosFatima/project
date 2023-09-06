import React, { useState } from "react";


import Sidebar from "../../components/Sidebar";

const WebLocation = () => {     
  
  
  
  return (
    <div className="flex justify-between">
      <div>
        <div className = 'mt-5'>
    <Sidebar    pages={'location'} 
            /> 
            </div></div>   
    <div className="w-full ml-20 mt-5 p-6">
      
        <div>
          <h2 className="font-bold">+Check In</h2>
          <h2 className="font-bold pt-10">Current location</h2>
          <div className="flex items-center w-60"> 
            <img src="images/red.png" alt="Location icon" className="mr-2" />
            <div>
              <p className="pt-4 pl-3">Pustegränd, Stockholm, SE</p>
              <span className=" pl-4  text-gray-300 pl-2">
                59.3293° N, 18.0686° E
              </span>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-bold">Previous location</h2>
         
          <div className="flex items-center w-fit"> 
            <img src="images/red.png" alt="Location icon" className="mr-2" />
            <div>
              <p className="pt-4 pl-3">Halsingegätan, Stockholm, SE</p>
              <span className=" pl-4 text-gray-300 pl-2">
                59.3293° N, 18.0686° E
              </span>
            </div>
          </div>
          <div className="flex items-center w-60"> 
            <img src="images/red.png" alt="Location icon" className="mr-2" />
            <div>
              <p className="pt-4 pl-3">Långa Gatan, Stockholm, SE</p>
              <span className=" pl-4  text-gray-300 pl-2">
                59.3293° N, 18.0686° E
              </span>
            </div>
          </div>
          <div className="flex items-center w-60"> 
            <img src="images/red.png"  className="mr-2" />
            <div>
              <p className="pt-4 pl-3">Djurgården, Stockholm, SE</p>
              <span className=" pl-4  text-gray-300 pl-2">
                59.3293° N, 18.0686° E
              </span>
            </div>
          </div>
          <div className="flex items-center w-fit">  
            <img src="images/red.png"  className="mr-2" />
            <div>
              <p className="pt-4 pl-3">Svartensgatan, Stockholm, SE</p>
              <span className=" pl-4  text-gray-300 pl-4">
                59.3293° N, 18.0686° E
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
  

export default WebLocation;


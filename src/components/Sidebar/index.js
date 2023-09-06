




import React from "react";
import Task from "../../components/Task";

const Sidebar = ({ pages}) => {
           
  return (
    <div>
      <div className={`mt-9 ${ pages=== "task" ? "active" : "inactive"}`}>
        <Task
          to="/web-task" 
          imgSrc={pages === "task" ? "images/doc.png" : "images/doc-2.png"}
          buttonText="Task"
          className="rounded-r-full  pt-8 pb-6 pl-6 flex items-center space-x-2 w-60 h-12 "
        />    
      </div>
      <div className={`mt-3 ${pages === "location" ? "active" : "inactive"}`}>
        <Task
          to="/web-location"
        imgSrc={pages === "location" ? "images/location-2.png" : "images/location.png"}
          buttonText="Location"
         className="rounded-r-full    pt-6 pb-6 pl-6     flex items-center space-x-2 w-60 h-12"
        />
      </div>  
      <div className='mt-80 '> 
        <Task
          to="/web-login"
          imgSrc="images/logout.png"
          buttonText="Logout"
          className="rounded-r-full    p-3 flex items-center space-x-2 w-60 h-12"
        />
      </div>    
    </div>
  );
};

export default Sidebar;

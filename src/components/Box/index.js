import React from "react";
import React, { useState } from "react"; 
 const Box =()=>{
    const TaskModal = ({ isOpen, onClose, task }) => {
        if (!isOpen) {
          return null;
        }
    
      return (
        <div className="modal-overlay">
          <div className="task-modal">
            <h2 className="modal-heading">{task.text}</h2>
            <img src={task.imgSrc} className="modal-image" />
            <div className="modal-buttons">
              <button className="modal-button" onClick={onClose}>
                Close
              </button>    
              <button className="modal-button">Action</button>
            </div>
          </div>
        </div>
      );
    };  
}
    // // WebTask component
    // const WebTask = () => {
    //   const [isModalOpen, setIsModalOpen] = useState(false);
    //   const [selectedTask, setSelectedTask] = useState(null);
    
    //   // Example incomplete tasks
    //   const incompleteTasks = [
    //     // ... your incomplete tasks
    //   ];
    
    //   const handleTaskClick = (task) => {
    //     setSelectedTask(task);
    //     setIsModalOpen(true);
    //   };
    
    //   return (
    //     <div className="web-task">
    //       {/* Render incomplete tasks */}
    //       {incompleteTasks.map((task) => (
    //         <div
    //           key={task.id}
    //           className="incomplete-task"
    //           onClick={() => handleTaskClick(task)}
    //         >
    //           {task.text}
    //         </div>
    //       ))}
    
    //       {/* Render the modal */}
    //       <TaskModal
    //         isOpen={isModalOpen}
    //         onClose={() => setIsModalOpen(false)}
    //         task={selectedTask}
    //       />
    //     </div>
    //   );
    // };  
 export default Box;










  
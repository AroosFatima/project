import React from "react";

const IncompleteTask = ({ task, onChange }) => {
  return (
    <>
      <div className="w-fit flex justify-between">
        <input
          type="checkbox"
          className=" p-2 bg-slate-200"
          // checked={task.completed}
          onChange={() => onChange(task.id)}
        />
        <label className=" ms-2 pl-3 ">{task.text}</label>
      </div>
      <div>
        <span className="text-xs text-gray-300 pl-8">⏰ {task.time}</span>
      </div>
    </>
  );
};

export default IncompleteTask;

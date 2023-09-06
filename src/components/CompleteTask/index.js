import React from "react";

const CompleteTask = ({ task, onChange }) => {
  return (
    <div className="">
      <input
        type="checkbox"
        className=" p-2 bg-slate-200 "
        checked={task.completed}
        onChange={() => onChange(task.id)}
      />
      <label className="ms-2 text-gray-300  p-4 ">{task.text}</label>
    </div>
  );
};

export default CompleteTask;

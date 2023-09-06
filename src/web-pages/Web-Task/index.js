import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import CompleteTask from "../../components/CompleteTask";
import IncompleteTask from "../../components/IncompleteTask";

const WebTask = () => {
  const [incompleteTasks, setIncompleteTasks] = useState([
    { id: 1, text: "Submit my resume", time: "Today, 17.00", completed: false },
    {
      id: 2,
      text: "Complete the test",
      time: "Tomorrow, 10.00",
      completed: false,
    },
    {
      id: 3,
      text: " Meeting with Jack",
      time: "Today,24 Feb, 15.00",
      completed: false,
    },
    {
      id: 4,
      text: " Buy a chocolate for Mom",
      time: "Tomorrow, 24 Feb, 11.00",
      completed: false,
    },
    {
      id: 5,
      text: "Facetime with Dad",
      time: " Today 24 Feb, 18.00",
      completed: false,
    },
  ]);
  const [completeTasks, setCompleteTasks] = useState([
    { id: 6, text: "Respond to Jane email", completed: true },
    { id: 7, text: "Rechedule weekly meeting", completed: true },
    { id: 8, text: "Service my bike", completed: true },
    { id: 9, text: "Recheck the agreement document", completed: true },
    { id: 10, text: "Check the latest on Community", completed: true },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [modalTaskText, setModalTaskText] = useState("");

  const handleTaskToggle = (taskId) => {
    const taskToToggle = incompleteTasks.find((task) => task.id === taskId);
    console.log(taskToToggle);

    if (taskToToggle) {
      setShowModal(true);
      setModalTaskText(taskToToggle.text);

      const updatedTask = {
        ...taskToToggle,
        completed: !taskToToggle.completed,
      };

      // console.log(updatedTask)
      const updatedIncompleteTasks = incompleteTasks.filter(
        (task) => task.id !== taskId
      );

      setIncompleteTasks(updatedIncompleteTasks);

      if (updatedTask.completed) {
        setCompleteTasks([...completeTasks, updatedTask]);
      }
    } else {
      handleCompleteTaskToggle(taskId);
    }
  };

  const handleCompleteTaskToggle = (taskId) => {
    const taskToToggle = completeTasks.find((task) => task.id === taskId);

    if (taskToToggle) {
      const updatedTask = {
        ...taskToToggle,
        completed: !taskToToggle.completed,
      };

      const updatedCompleteTasks = completeTasks.filter(
        (task) => task.id !== taskId
      );

      setCompleteTasks(updatedCompleteTasks);

      if (!updatedTask.completed) {
        setIncompleteTasks([...incompleteTasks, updatedTask]);
      }
    }
  };

  const handleClick = (e) => {
    e.preventDefault();

    let obj = {
      id: incompleteTasks.length + 1,
      text: summary,
      time: dueDate,
    };
    incompleteTasks.push(obj);

    setIncompleteTasks([...incompleteTasks]);
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-between">
      <div className="flex ">
        <Sidebar pages={"task"} />
        <div className="ml-20">
          <div className="mt-10  ml-10">
            <button className="font-bold" onClick={() => setIsModalOpen(true)}>
              +Add New Task
            </button>

            <div></div>
            <h2 className="font-bold pt-5 pl-5">Incomplete</h2>
            <form className="form pr-6 pl-6 pt-4 pb-6">
              {incompleteTasks.map((task) => (
                <IncompleteTask
                  key={task.id}
                  task={task}
                  onChange={handleTaskToggle}
                />
              ))}
            </form>
          </div>
          <div className=" ml-16  w-fit ">
            <h2 className="font-bold pb-3 ">Completed</h2>
            <div className=" w-fit pl-2">
              {completeTasks.map((task) => (
                <CompleteTask
                  key={task.id}
                  task={task}
                  onChange={handleCompleteTaskToggle}
                />
              ))}
            </div>
          </div>
          <FormModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            handleClick={handleClick}
            setDescription={setDescription}
            setSummary={setSummary}
            setDueDate={setDueDate}
          />
        </div>
      </div>
      {/* popup */}
      <CreateModal
        setShowModal={setShowModal}
        showModal={showModal}
        modalTaskText={modalTaskText}
        summary={summary}
        description={description}
        dueDate={dueDate}
      />
    </div>
  );
};

export default WebTask;
//  popupModal
const CreateModal = ({ showModal, setShowModal, modalTaskText }) => {
  return (
    <div
      id="popup-modal"
      tabindex="-1"
      class={`rounded p-4 overflow-x-hidden  overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${
        showModal ? "" : "hidden"
      }`}>
      <div class=" rounded w-full max-w-md max-h-full">
        <div class="  bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex justify-between p-4">
            {" "}
            <div>
              {" "}
              <h2 className="text-black font-bold">{modalTaskText}</h2>
              <p className="text-sm pt-2">Send my resume to DigitalTolk</p>
            </div>
            <img
              src="images/frame.png"
              className="h-12 w-12 mt-1 ml-2"
              alt="Frame"
            />
          </div>
          <div class="pl-5  pr-5 pt-2 pb-2 text-center bg-gray-100">
            <button
              data-modal-hide="popup-modal"
              type="button"
              class="text-gray-500  focus:outline-none  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              onClick={() => setShowModal(false)}>
              Skip
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              class="text-gray-500   text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 "
              onClick={() => setShowModal(false)}>
              Remind me Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
//  formModal
const FormModal = ({
  isModalOpen,
  setIsModalOpen,
  handleClick,
  setSummary,
  setDescription,
  setDueDate,
  summary,
  description,
  dueDate,
}) => {
  return (
    <div
      className={`modal ${
        isModalOpen ? "block" : "hidden"
      } fixed inset-0 overflow-y-auto z-50 `}>
      <div className="modal-overlay  backdrop-blur-lg h-[100vh] ">
        <div className="modal-container  flex items-center justify-center ">
          <div className="modal-content  mt-10  p-6  modal-content p-6 bg-white rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">New Task</h2>
            <form onSubmit={handleClick}>
              <div className="mb-4">
                <div className="flex">
                  <img src="images/vector.png" className="h-5 w-5 mt-3"></img>
                  <input
                    name="title"
                    id="title"
                    placeholder="Summary"
                    label="Summary"
                    type="text"
                    className="mt-1  p-2   w-full"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                  />
                </div>
                <div className="mb-4 ">
                  <hr className="border-t-2 border-gray-800 my-4" />
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between">
                  <img
                    src="images/description.png"
                    className="h-5 w-5 mt-3"></img>

                  <input
                    name="ar"
                    id="ar"
                    type="text"
                    placeholder="Description"
                    className="mt-1 p-2  rounded w-full "
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4 ">
                <hr className="border-t-2 border-gray-800 my-4" />
              </div>
              <div className="mb-4 ">
                <div className="flex">
                  <img src="images/clock.png" className="h-5 w-5 mt-3"></img>

                  <input
                    name="time"
                    id="time"
                    placeholder=" Due Date"
                    type="text"
                    className="mt-1 p-2  rounded w-full"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>{" "}
                <div className="mb-4 ">
                  <hr className="border-t-2 border-gray-800 my-4" />
                </div>
              </div>
              <div className="items-center flex flex-col">
                <button
                  type="button"
                  className="py-2 px-0 bg-black text-white  w-80 rounded-full font-bold"
                  onClick={handleClick}>
                  Save
                </button>
                <button
                  className="mr-2 px-4 py-3  bg-blue font-bold text-black-700 w-80 rounded-full"
                  onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

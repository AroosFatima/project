import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { config } from "../../config/config";
import axios from "axios";
import { Router } from "react-router-dom";

export const loader = async () => {
  try {
    const response = await axios.get(`${config.apiUrl}/posts`);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

const Dashboard = () => {
  const posts = useLoaderData();

  const [data, setData] = useState(posts);

  const array = [
    { id: 1, title: "Intro to CSS", author: "Aroos" },

    { id: 2, title: "basics", author: "rida" },
    { id: 3, title: " Fundamentals of java ", author: "Fatima" },
    { id: 4, title: "frontend develepment ", author: "Mubashra" },
    { id: 5, title: "Data Science ", author: "Doe" },
    { id: 5, title: "web programing ", author: "kely" },
  ];
  const [items, setItems] = useState(array);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [editID, setEditID] = useState();
  const handleClick = (e) => {
    e.preventDefault();

    let obj = {
      id: data.length + 1,
      title: title,
    };
    data.unshift(obj);
    data.map((val, index) => (val.id = index + 1));
    setData([...data]);
    setIsModalOpen(false);
    reset();
  };

  const handleEdit = (id) => {
    const find = data.find((item) => item.id === id);
    reset("");
    setTitle(find.title);

    setEditID(id);
    setIsModalOpen(true);
  };

  const handleDelete = (index) => {
    const filter = data.filter((item, idx) => idx !== index);
    setData(filter);
    reset();
  };
  const reset = () => {
    setTitle("");
    setAuthor("");
  };
  const handleMOdalClose = () => {
    setIsModalOpen(false);
    reset();
  };

  return (
    <div className=" flex justify-center items-center h-screen ">
      <div className="border border-gray-300  bg-slate-400 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <Button
          type="submit"
          size="large"
          className="flex justify-end"
          onClick={() => setIsModalOpen(true)}>
          Add
        </Button>

        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-gray-600">ID</th>
              <th className="px-4 py-2 text-gray-600">Title</th>
              <th className="px-4 py-2 text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody></tbody>
          {data.slice(0, 5).map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-500 px-4 py-2 text-gray-600 font-medium">
                {item.id}
              </td>
              <td className="border border-gray-500 px-4 py-2 text-gray-600 font-medium">
                {item.title.slice(0, 20)}
              </td>
              <td className="border border-gray-500 px-4 py-2 text-gray-600 font-medium">
                <div className="felx justify-center items-center">
                  <Button
                    type="submit"
                    size="large"
                    className="mr-3"
                    onClick={() => handleEdit(item.id)}>
                    Edit
                  </Button>
                  <Button
                    type="button"
                    size="large"
                    variant="danger"
                    onClick={() => handleDelete(index)}>
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>

      <CreateModal
        handleMOdalClose={handleMOdalClose}
        isModalOpen={isModalOpen}
        handleClick={handleClick}
        title={title}
        setTitle={setTitle}
        setAuthor={setAuthor}
        author={author}
      />
    </div>
  );
};
export default Dashboard;
let CreateModal = ({
  isModalOpen,
  handleMOdalClose,
  handleClick,
  title,
  setTitle,
  setAuthor,
  author,
}) => {
  return (
    <div
      id="authentication-modal"
      aria-hidden="true"
      class={`bg-gray-900 bg-opacity-50  backdrop-blur-lg flex justify-center items-center fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${
        isModalOpen ? "" : "hidden"
      }`}>
      <div class="relative w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            onClick={handleMOdalClose}
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="authentication-modal">
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokewidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="px-6 py-6 lg:px-8">
            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Sign in to our platform
            </h3>
            <form class="space-y-6" onSubmit={handleClick}>
              <div className="mb-4">
                <Input
                  label="title"
                  name="title"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              {/* <div className="mb-4">
                <Input
                  label="author"
                  name="author"
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div> */}
              <div className="felx justify-center items-center">
                <Button
                  type="submit"
                  size="large"
                  className="mr-3"
                  onClick={(e) => handleClick(e)}>
                  Add
                </Button>
                <Button
                  type="button"
                  size="large"
                  variant="danger"
                  onClick={handleMOdalClose}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

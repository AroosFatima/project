import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Navigation } from "../../components/navigation"

const Register = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("data", event);
  };

  return (
    <>  <Navigation>
       
    </Navigation>
    
    <div className=" w-full flex  justify-center  items-center min-h-screen    my-5">
      <div className="w-full max-w-lg">
        <form
          onSubmit={onSubmit}
          className=" border border-gray-300 bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h3 className="text-2xl text-center mb-3">Register</h3>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="password"
            />

          </div>
          <div className="flex items-center justify-between">
            <Button
              
              type="submit"
              size='large'
              
              className='w-full'>
              Register
            </Button>
           
             
           
          </div>
          <p className="text-center mt-3">Already have an account?<Link className="underline text-sky-600" to ={'/'}>Login</Link></p>
        </form>
      </div>
    </div></>
  );
};
export default Register;











// import React from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

const WebLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-50 flex justify-center items-center min-h-screen my-5">
      <div className="w-full max-w-lg">
        <form className="rounded pl-20 pr-20 pt-6 pb-8 mb-4">
          <h3 className="text-2xl font-bold text-center mb-8">Login</h3>
          <div className="mb-4">
            <Input label="Email" id="Email" placeholder="email" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                className="shadow appearance-none bg-slate-100 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="password"
              />
              <span           
                onClick={togglePasswordVisibility}
                className="absolute top-0 right-0 mt-2 mr-3 cursor-pointer text-black font-bold">
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Button
              type="submit"
              size="large"
              className="w-full bg-black rounded-full h-12">
              <Link to={"/web-task"}>Login</Link>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WebLogin;

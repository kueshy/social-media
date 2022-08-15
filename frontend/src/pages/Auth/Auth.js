import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { EyeOffIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../actions/AuthAction";

function Auth() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(data));
  };

  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <div className="flex items-center gap-2 p-4">
        <img src={Logo} alt="" className="h-24" />
        <div className="flex flex-col">
          <span className="text-2xl uppercase">Social Media App</span>
          <span className="text-sm">
            Interact with other people to get the best out of them
          </span>
        </div>
      </div>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col p-4 m-2 bg-slate-800 w-80 rounded">
            <h1 className="text-2xl flex justify-center mb-2">Sign In</h1>
            <input
              type="text"
              name="username"
              className="p-2 mb-2 text-black rounded border-none outline-none"
              placeholder="e.g. johndoe"
              value={data.username}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              className="p-2 mt-2 text-black rounded border-none outline-none relative"
              placeholder="*************"
              value={data.password}
              onChange={handleChange}
            />
            <span className="self-end mt-2">
              <a href="/"> Forgot password</a>
            </span>
            <div className="mt-4 flex justify-between">
              <span>
                Don't have an account?{" "}
                <a href="/" className="underline">
                  {" "}
                  sign up
                </a>
              </span>
              <button type="submit" className="bg-sky-500 px-3 py-1 rounded">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;

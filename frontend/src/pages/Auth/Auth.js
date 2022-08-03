import React from "react";
import Logo from "../../assets/images/logo.png";
import { EyeOffIcon } from "@heroicons/react/outline";

function Auth() {
  const handleSubmit = (e) => {
    e.preventDefault();
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
              className="p-2 mb-2 text-black rounded border-none outline-none"
              placeholder="e.g. johndoe"
            />
            <input
              type="password"
              className="p-2 mt-2 text-black rounded border-none outline-none relative"
              placeholder="*************"
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
              <button className="bg-sky-500 px-3 py-1 rounded">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;

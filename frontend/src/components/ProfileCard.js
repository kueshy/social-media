import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/AuthAction";
import Cover from "../assets/images/cover.png";
import Messi from "../assets/images/messi.jpg";

function ProfileCard() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="bg-slate-800  rounded-t-lg overflow-x-clip">
      <div className="relative">
        <img src={Cover} alt="" className="bg-cover w-full rounded-t-lg" />
      </div>
      <div className="flex items-center justify-center">
        <img
          src={Messi}
          alt=""
          className="h-20 w-20 flex rounded-full absolute"
        />
      </div>
      <div className="flex flex-row justify-evenly mt-10 mb-1">
        <div className="text-center">
          <h1>Followers</h1>
          <span>360</span>
        </div>
        <div className="border-y-2"></div>
        <div className="text-center">
          <h1>Following</h1>
          <span>106</span>
        </div>
      </div>
      <div className="border-b border-slate-300/10"></div>
      <div className="flex justify-around mt-1 pb-2">
        <span>
          <a href="/" className="text-sky-500">
            My profile
          </a>
        </span>
        <span>
          <a onClick={handleLogout} href="/">
            Logout
          </a>
        </span>
      </div>
    </div>
  );
}

export default ProfileCard;

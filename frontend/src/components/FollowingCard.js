import React from "react";
import Cover from "../assets/images/cover.png";
// import { Followers } from "../Data/FollowersData";

function FollowingCard() {
  return (
    <div className="bg-slate-800 mt-2 p-2 rounded">
      <h1 className="text-xl text-green-40 mb-3">Following</h1>

      <div className="flex flex-row items-center justify-between mb-2">
        <div className="flex flex-row items-center gap-x-2">
          <img src={Cover} alt="" className="h-14 w-14 rounded-full" />
          <div className="flex flex-col">
            <span>Emonyi Elias</span>
            <span>@elias</span>
          </div>
        </div>

        <div>
          <button className="bg-sky-500/80 shadow-md hover:bg-sky-500/90 px-4 py-1 rounded">
            Follow
          </button>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-x-2">
          <img src={Cover} alt="" className="h-14 w-14 rounded-full" />
          <div className="flex flex-col">
            <span>Emonyi Elias</span>
            <span>@elias</span>
          </div>
        </div>

        <div>
          <button className="bg-slate-600 px-4 py-1 rounded">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default FollowingCard;

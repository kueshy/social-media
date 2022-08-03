import React from "react";

import {
  ChatIcon,
  RefreshIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/outline";

function Post({ id, data }) {
  return (
    <div>
      <div className="p-2">
        <div className="">
          <div className="">
            <div className="ml-2">
              <div className="">
                <span className="text-white font-bold mr-1">Kush</span>
                <span className="text-slate-400">@EliasJr</span>
                <span className="items-center">.</span>
              </div>

              <span className="text-white ">{data.post}</span>
              <img
                src={data.image}
                alt={data.post}
                className="w-full pt-2 rounded-2xl"
              />

              <div className="flex justify-between pt-2">
                <span className="flex items-center cursor-pointer">
                  <ChatIcon className="text-white h-7 w-6 pr-2" />
                  <span className="text-sm">12</span>
                </span>
                <span className="flex items-center cursor-pointer">
                  <RefreshIcon className="text-white h-6 w-6 pr-2" />
                  <span className="text-sm">12</span>
                </span>
                <span className="flex items-center cursor-pointer">
                  <HeartIcon className="text-white h-6 w-6 pr-2" />
                  <span className="text-sm">12</span>
                </span>
                <span>
                  <ShareIcon className="text-white h-5 w-5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-slate-300/10 mb-2"></div>
      {/* <div className="p-2">
        <div className="">
          <div className="ml-2">
            <div className="">
              <span className="text-white font-bold mr-1">Kush</span>
              <span className="text-slate-400">@EliasJr</span>
              <span className="items-center">.</span>
            </div>
            <span className="text-white">
              Javascript functions, which one do you prefer?
            </span>
            <img src={JS} alt="" className="w-full pt-2 rounded-2xl" />
            <div className="flex justify-between pt-2">
              <span className="flex items-center">
                <ChatIcon className="text-white h-7 w-6 pr-2" />
                <span className="text-sm">12</span>
              </span>
              <span className="flex items-center">
                <RefreshIcon className="text-white h-6 w-6 pr-2" />
                <span className="text-sm">12</span>
              </span>
              <span className="flex items-center">
                <HeartIcon className="text-white h-6 w-6 pr-2" />
                <span className="text-sm">12</span>
              </span>
              <span>
                <ShareIcon className="text-white h-5 w-5" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-slate-300/10 mb-2"></div>
      <div className="p-2">
        <div className="">
          <div className="ml-2">
            <div className="">
              <span className="text-white font-bold mr-1">Kush</span>
              <span className="text-slate-400">@EliasJr</span>
              <span className="items-center">.</span>
            </div>
            <span className="text-white ">
              Messi sent Suarez a special message that was played during his
              Nacional unveiling
            </span>
            <img src={Messi} alt="" className=" w-full pt-2 rounded-2xl" />
            <div className="flex justify-between pt-2">
              <span className="flex items-center">
                <ChatIcon className="text-white h-7 w-6 pr-2" />
                <span className="text-sm">12</span>
              </span>
              <span className="flex items-center">
                <RefreshIcon className="text-white h-6 w-6 pr-1" />
                <span className="text-sm">12</span>
              </span>
              <span className="flex items-center">
                <HeartIcon className="text-white h-6 w-6 pr-1 " />
                <span className="text-sm">12</span>
              </span>
              <span>
                <ShareIcon className="text-white h-5 w-5" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-slate-300/10 mb-2"></div>
      <div className="p-2">
        <div className="">
          <div className="ml-2">
            <div className="">
              <span className="text-white font-bold mr-1">Kush</span>
              <span className="text-slate-400">@EliasJr</span>
              <span className="items-center">.</span>
            </div>
            <span className="text-white ">
              Messi sent Suarez a special message that was played during his
              Nacional unveiling
            </span>
            <div>
              <img src={fk} alt="" className=" w-full pt-2 rounded-2xl" />
            </div>
            <div className="flex justify-between pt-2">
              <span>comment</span>
              <span>retweet</span>
              <span>like</span>
              <span>share</span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Post;

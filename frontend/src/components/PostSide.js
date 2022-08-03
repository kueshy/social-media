import React from "react";
import PostCard from "./PostCard";
import PostShare from "./PostShare";

function PostSide() {
  return (
    <div className="col-span-3 mt-4 p-2 h-screen overflow-auto">
      <PostShare />
      <PostCard />
    </div>
  );
}

export default PostSide;

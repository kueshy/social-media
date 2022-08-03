import React from "react";

import { PostsData } from "../Data/PostsData";
import Post from "./Post";

const Posts = () => {
  return (
    <div>
      {PostsData.map((posts, id) => {
        return <Post id={id} data={posts} />;
      })}
    </div>
  );
};

export default Posts;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTimelinePosts } from "../actions/PostsAction";

import { PostsData } from "../Data/PostsData";
import Post from "./Post";

const Posts = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts, loading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);
  if (!posts) return "No posts";
  if (params.id) posts = posts.filter((post) => post.userId === params.id);
  return (
    <div>
      {loading
        ? "Fetching posts..."
        : posts.map((post, id) => {
            return <Post key={id} data={post} />;
          })}
    </div>
  );
};

export default Posts;

import React from "react";
import Auth from "../pages/Auth/Auth";
import PostSide from "../components/PostSide";
import ProfileSide from "../components/ProfileSide";
import RightSide from "../components/RightSide";

function Home() {
  return (
    <div className="grid grid-cols-7">
      <ProfileSide />
      <PostSide />
      <RightSide />
    </div>
  );
}

export default Home;

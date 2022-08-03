import React from "react";
import FollowingCard from "./FollowingCard";
import LogoSearch from "./LogoSearch";
import ProfileCard from "./ProfileCard";

function ProfileSide() {
  return (
    <div className="col-span-2 p-4 overflow-y-auto">
      <LogoSearch />
      <ProfileCard />
      <FollowingCard />
    </div>
  );
}

export default ProfileSide;

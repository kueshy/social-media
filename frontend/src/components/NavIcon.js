import React from "react";
import {
  HomeIcon,
  CogIcon,
  BellIcon,
  HashtagIcon,
  MailIcon,
} from "@heroicons/react/outline";

function NavIcon() {
  return (
    <div>
      <div className="flex justify-between">
        <a href="/">
          <HomeIcon className="h-7 w-7 text-white" />
        </a>
        <CogIcon className="h-7 w-7 text-white cursor-pointer" />
        <BellIcon className="h-7 w-7 text-white cursor-pointer" />
        <HashtagIcon className="h-7 w-7 text-white" />
        <MailIcon className="h-7 w-7 text-white" />
      </div>
    </div>
  );
}

export default NavIcon;

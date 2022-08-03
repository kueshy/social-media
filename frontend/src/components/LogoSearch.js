import React from "react";
import Logo from "../assets/images/logo.png";

function LogoSearch() {
  return (
    // <div>
    <div className="flex items-center gap-x-2">
      <img src={Logo} alt="" className="h-14" />
      <button className="bg-slate-600/80 shadow-md w-full text-white rounded py-1 hover:bg-slate-600/90">
        #Explore
      </button>
    </div>
    // </div>
  );
}

export default LogoSearch;

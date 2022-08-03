import React from "react";
import ButtonShare from "./ButtonShare";
import NavIcon from "./NavIcon";
import TrendCard from "./TrendCard";

function RightSide() {
  return (
    <div className="col-span-2 p-2 mt-4">
      <NavIcon />
      <TrendCard />
      <ButtonShare />
    </div>
  );
}

export default RightSide;

import React from "react";
import { TrendData } from "../Data/TrendData";

function TrendCard() {
  return (
    <div className="pt-2">
      <h3 className="text-xl pb-2 pt-1">Trending</h3>
      {TrendData.map((trend, id) => {
        return (
          <div className="flex flex-col pb-2 cursor-pointer">
            <span className="text-white">#{trend.name}</span>
            <span className="text-sm">{trend.shares}k shares</span>
            <div className="border-b border-slate-300/10 pb-2"></div>
          </div>
        );
      })}
    </div>
  );
}

export default TrendCard;

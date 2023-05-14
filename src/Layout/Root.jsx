import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../Pages/Share/NavigationBar";

const Root = () => {
  return (
    <div>
      <NavigationBar />
      <div className="max-w-[1240px] mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;

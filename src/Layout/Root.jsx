import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../Pages/Share/NavigationBar";

const Root = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default Root;

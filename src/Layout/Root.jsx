import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer";
import NavigationBar from "../Pages/Share/NavigationBar";

const Root = () => {
  return (
    <div>
      <NavigationBar />
      <div className="max-w-[1240px] mx-auto">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;

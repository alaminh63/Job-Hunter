import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";

const NavigationBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className=" bg-slate-200 ">
      <div className="max-w-[1240px] mx-auto flex justify-between p-3 items-center">
        <Link to="/">
          <h1 className="text-3xl font-bold">
            Job<span className="text-indigo-400">Hunter</span>
          </h1>
        </Link>
        <span className="md:hidden">
          {toggle ? (
            <GrFormClose onClick={() => setToggle(!toggle)}></GrFormClose>
          ) : (
            <HiMenu onClick={() => setToggle(!toggle)}></HiMenu>
          )}
        </span>
        <ul
          className={`transition-all items-center duration-300  gap-4 flex bg-black p-3 opacity-75 md:bg-transparent md:flex-row flex-col absolute md:static w-full top-[8.3%] text-white md:text-black  ${
            toggle ? "left-0" : "-left-full"
          }`}
        >
          <li className="md:w-[30%] mx-auto flex flex-col md:flex-row gap-4">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setToggle(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/statistics"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setToggle(false)}
            >
              Statistics
            </NavLink>
            <NavLink
              to="/applied-jobs"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setToggle(false)}
            >
              Applied Jobs
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setToggle(false)}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <Link>
              <button className="start-applying-btn">Start Applying</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;

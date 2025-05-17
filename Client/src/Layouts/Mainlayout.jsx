import React from "react";
import { NavLink, Outlet } from "react-router";
import Logout from "../Components/Logout";
import ColorGrid from "../Components/ColorGrid";

const Mainlayout = () => {
  return (
    <div>
      <div className="flex justify-end mt-2 mr-2">
        <Logout />
      </div>
      <div className=" container mx-auto my-20 ">
        <div className="bg-yellow">
          <h1 className="text-xl font-semibold text-Dark-Blue-Gray p-2">
            Welcome to the heaven of colors
          </h1>
          <ol  className="list-['✨'] pl-6 py-2">
            <li>
              <p>This project is under contraction</p>
            </li>
            <li>
              {" "}
              <p>All the colors are for test purposes only.</p>
            </li>
            <li>
              {" "}
              <p>This is not the actual website</p>
            </li>
            <li>
              {" "}
              <p>Currently only the Authentication system is active</p>
            </li>
          </ol>
        </div>
        <div className="grid grid-cols-2 border py-1 my-5">
          <NavLink to={"/home"}>
            <div className="border transition-all duration-500  w-1/2 hover:w-full hover:bg-ash hover:text-white bg-charcoal text-yellow text-center py-1">
              Home
            </div>
          </NavLink>
          <NavLink to={"/about"}>
            <div className="border transition-all duration-500  w-1/2 hover:w-full hover:bg-ash hover:text-white bg-charcoal text-yellow text-center py-1">
              about
            </div>
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Mainlayout;

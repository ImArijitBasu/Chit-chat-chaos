import React from "react";
import { NavLink, Outlet } from "react-router";

const Mainlayout = () => {
  return (
    <div>
      <div className=" container mx-auto my-20 ">
        <h1 className="text-4xl uppercase text-center my-5">colors</h1>
        <div className=" grid grid-cols-4 gap-2 text-center">
          <h1 className="text-2xl font-bold bg-ash">ash color</h1>
          <h1 className="text-2xl font-bold bg-blue">blue color</h1>
          <h1 className="text-2xl font-bold bg-charcoal text-white">
            charcoal color
          </h1>
          <h1 className="text-2xl font-bold bg-yellow">yellow color</h1>
          <h1 className="text-2xl font-bold bg-green">green color</h1>
          <h1 className="text-2xl font-bold bg-meghla">meghla</h1>
          <h1 className="text-2xl font-bold bg-light-gray">lghit gray</h1>
          <h1 className="text-2xl font-bold bg-accent">accent</h1>
          <h1 className="text-2xl font-bold bg-pink">Pink</h1>
        </div>
        <p className="my-5">
          <span className="text-red-500 px-1">*</span>add your colors and fonts
          in index.css file
        </p>
        <div className="grid grid-cols-2 border py-1 my-5">
            <NavLink to={"/home"}><div className="border transition-all duration-500  w-1/2 hover:w-full hover:bg-ash hover:text-white bg-charcoal text-yellow text-center py-1">Home</div></NavLink>
            <NavLink to={"/about"}><div className="border transition-all duration-500  w-1/2 hover:w-full hover:bg-ash hover:text-white bg-charcoal text-yellow text-center py-1">about</div></NavLink>
        </div>
      <Outlet />
      </div>
    </div>
  );
};

export default Mainlayout;

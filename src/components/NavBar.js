import React from "react";
import Button from "./Button";
import { HiChevronDown } from "react-icons/hi";

const NavBar = ({ name }) => {
  return (
    <div className="flex justify-between mx-32">
      <div className="flex gap-10 items-center">
        <div className="flex flex-col">
          <h1 className="text-[#1b73e8] text-3xl">accedian</h1>
          <h1 className="text-gray-500 text-xs">credentials that matter</h1>
        </div>
        <div className="flex items-center">
          <Button name="Courses" type="primary" width="100" textAlignment="left" icon={<HiChevronDown />}/>
        </div>
      </div>
      <div className="flex gap-8 items-center">
        <h1 className="text-sm">Refer & Earn</h1>
        <h1 className="text-sm">Resources</h1>
        <h1 className="text-sm">About Us</h1>
        <Button  name="Login" type="secondary" />
        <Button name="Try for free" type="primary" />
      </div>
    </div>
  );
};

export default NavBar;

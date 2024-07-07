import { React, useState } from "react";
import { HiChevronRight } from "react-icons/hi";

const ProgramList = ({ name }) => {
  return (
    <div className="flex items-center justify-between p-2">
      <h1 className=" font-semibold text-gray-600 text-sm ">
        {name}
      </h1>
      <span className="text-xl">
        <HiChevronRight />
      </span>
    </div>
  );
};

export default ProgramList;

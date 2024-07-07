import React from "react";
import { FcGraduationCap } from "react-icons/fc";
import { LiaRupeeSignSolid } from "react-icons/lia";

const ProgramsDetailPage = ({name, referrerBonus,refereeBonus}) => {



  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-2">
        <FcGraduationCap className="fill-[#4751d9] text-3xl m-2" />
        <p className="text-gray-600 text-lg">
          {name}
        </p>
        <div className="flex items-center">
          <LiaRupeeSignSolid />
          <h1>{referrerBonus}</h1>
        </div>
        <div className="flex items-center">
          <LiaRupeeSignSolid />
          <h1>{refereeBonus}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProgramsDetailPage;

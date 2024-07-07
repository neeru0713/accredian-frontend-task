import { React, useState } from "react";
import ProgramList from "./ProgramList";
import { HiChevronRight } from "react-icons/hi";
// import ProgramsDetailPage from "./ProgramsDetailPage";
import Table from "./Table";
import ProgramsDetailPage from "./ProgramsDetailPage";

const ReferralBenefits = () => {
  const programList = [
    "PRODUCT MANAGEMENT",
    "STRATGY & LEADERSHIP",
    "BUSINESS MANAGEMENT",
    "FINTECH",
    "SENIOR MANAGEMENT",
    "DATA SCIENCE",
    "DIGITAL TRANSFORMATION",
    "BUSINESS ANALYTICS",
  ];

  const ProgramsDetail = [
    "Professional Certificate Program in Product Management",
    "PG Certificate Program in Strategic Product Management",
    "Exeutive Program in Data Driven Product Management",
    "Exeutive Program in Product Management and Digital Transformation",
    "Exeutive Program in Product Management",
    "Advanced Certification in Product Management",
    "Exeutive Program in Product Management and Project Management",
  ]
  return (
    <div className="flex flex-col">
      <p className="font-semibold text-2xl m-auto">
        What Are The <span className="text-[#1b73e8]">Referral Benefits?</span>
      </p>
      <h1 className="text-right mr-[140px]">Enrolled</h1>
      <div className="flex gap-4">
        <div className="flex flex-col m-2 gap-4 border rounded-lg shadow-lg w-[20%]">
          <div className="flex w-full bg-blue-500 text-white items-center rounded-tl-lg rounded-tr-lg">
            <h1 className="font-semibold text-left text-md px-4 py-4 rounded-md w-[85%]">
              ALL PROGRAMS
            </h1>
            <span className="text-2xl text-white w-[15%]">
              <HiChevronRight />
            </span>
          </div>
          {ProgramsDetail.map((list, index) => (
            <div>
              <ProgramsDetailPage name={list} />
              <hr className=" border-gray-400" />
            </div>
          ))}
        </div>

        <Table/>
        {programList.map((program, index) => (
            <div>
              <ProgramList name={program} />
              <hr className=" border-gray-400" />
            </div>
          ))}
      </div>
     
    </div>
  );
};

export default ReferralBenefits;

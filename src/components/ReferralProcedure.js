import React from "react";

const ReferralProcedure = ({ text, icon, width, height }) => {
  let styles = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div
      className="border shadow-2xl w-[250px] h-[250px] flex flex-col items-center justify-center rounded-full p-10"
      style={styles}
    >
      <div className="text-7xl text-[#1b73e8]">
        {icon}
      </div>
      <p>{text}</p>
    </div>
  );
};

export default ReferralProcedure;

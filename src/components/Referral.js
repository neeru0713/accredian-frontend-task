import React from "react";
import ReferralProcedure from "./ReferralProcedure";
import Button from "./Button";
import { BiSolidUserPlus } from "react-icons/bi";
import { MdEditDocument } from "react-icons/md";
import { BsCreditCardFill } from "react-icons/bs";

const Referral = () => {
  return (
    <div className="bg-[#eef5ff] flex flex-col justify-center items-center gap-20 py-10">
      <h1 className="font-semibold text-xl">
        How Do I <span className="text-[#1b73e8]">Refer?</span>
      </h1>
      <div className="flex px-32 gap-12 items-center justify-between">
        <ReferralProcedure
          text="Submit referrals easily via our website's referral section."
          icon={<BiSolidUserPlus />}
        />
        <ReferralProcedure
          text="Earn rewards once your referral joins an Accredian program."
          icon={<MdEditDocument />}
        />
        <ReferralProcedure
          text="Both parties receive a bonus 30 days after program enrollment."
          icon={<BsCreditCardFill />}
        />
      </div>
      <Button name="Refer now" type="primary" width="200" />
    </div>
  );
};

export default Referral;

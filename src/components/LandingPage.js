import React from "react";
import HeroSection from "./HeroSection";
import Referral from "./Referral";
import ReferralBenefits from "./ReferralBenefits";
const LandingPage = () => {
  return (
    <div className="flex flex-col gap-20">
      <HeroSection />
      <Referral />
      {/* <ReferralBenefits /> */}
    </div>
  );
};

export default LandingPage;

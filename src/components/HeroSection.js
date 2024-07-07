import React, { useState } from "react";
import NavBar from "./NavBar";
import Capsule from "./Capsule";
import Button from "./Button";
import Modal from "./Modal.js";
import ReferralForm from "./ReferralForm.js";
const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="hero-section flex flex-col gap-10">
      <NavBar />
      <div className="bg-[#e5effc] border rounded-3xl p-4 flex w-[50%] justify-between m-auto px-20 pointer-cursor">
        <h1 className="ml-8 text-blue-500">Refer</h1>
        <h1>Benefits</h1>
        <h1>FAQs</h1>
        <h1>Support</h1>
      </div>
      <div className="bg-[#eef5ff] border rounded-2xl m-auto w-[80%] flex items-center relative">
        <div className="flex flex-col m-auto">
          <h1 className="font-bold text-5xl">Let's Learn</h1>
          <h1 className="font-bold text-5xl ml-[-40%]">& Earn</h1>
          <p className="text-3xl mt-8 ml-[-12%]">Get a chance to win</p>
          <p className="text-3xl ml-[-10%] mt-2 mb-6">
            up-to{" "}
            <span className="text-[#1b73e8] font-semibold text-4xl">
              Rs. 15,000
            </span>
          </p>
          <Button
            name="Refer Now"
            type="primary"
            width="150"
            onClick={handleButtonClick}
          />
        </div>

        <img
          className="h-[600px] w-[600px]"
          src="https://s3-alpha-sig.figma.com/img/6da5/530f/c90be82b93f2066608be1f96ef347467?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QMFcRlpwXRit2txvUmeNO3IXQ1Ut0i6JJiv-X4fx03kHq6~U9MBQeJHPu9LTsjMmUHB0SfN50tqW2rrEIxrxd2g7Nix-Ouj6br98~nqzo8NWTocxEmm9nJHz6P1VjnJNtT-yVlkzuL936Qs4vjLiIsT0J65E8QMNg68~KYmTAiWluaK9wzFnnNNKfyjutvf~N4I9fSublwB3nZyw4KtODCcvEG9U2P76twuAyN-ROQM-BwWqVVHxsuBE7W~Hhfwn1JhpscUqZRuIFALlVzWoZu2jyc~nWjPPzxTe~cwVpHRVRn0nBx8EvGZ2MkPVsdZhQ~X5mrK1CQ2lc1SyOk8OSg__"
        />
        <img
          className="h-20 w-20 absolute top-[-25px] right-[5px] rotate-180 z-0"
          src="https://s3-alpha-sig.figma.com/img/fb39/0c4b/10470aa903b54e8e9e856c5046a0fc6f?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lOu7BMeeN7ffr47QMMSjwHSudMUHH-H1Ti3ryoGKqlOMkPZe5ApXM920boTMgpHRtpnOjAjJyGGHR8ABB9~mnSP3kD3bQvfllakxKApZpH9JQs-JNU3M6ah-Tc1Yn2f5UA6jql9ENFY7GV~PguhOOOAzUgCAkF0fKJ0BG3V-lzQv0E0SOxCe806okIZwbGnkofG1RQef06zkBMt4w8aplvedPMeadBXKB1yDcsaCy7TXpO5qd~N9g76FrqhA4AdSlSNmZzD33XCJ8VZAZ5m0fJxgOTfWvmrUqL6xSjrJBMm9zk0YxFGBWsxK7v1U36Hy3eInfmW-iGtP9Ksd2~o-DA__"
        />
        <img
          className="h-20 w-20 absolute top-[-22px] left-[0px] rotate-90 z-0"
          src="https://s3-alpha-sig.figma.com/img/fb39/0c4b/10470aa903b54e8e9e856c5046a0fc6f?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lOu7BMeeN7ffr47QMMSjwHSudMUHH-H1Ti3ryoGKqlOMkPZe5ApXM920boTMgpHRtpnOjAjJyGGHR8ABB9~mnSP3kD3bQvfllakxKApZpH9JQs-JNU3M6ah-Tc1Yn2f5UA6jql9ENFY7GV~PguhOOOAzUgCAkF0fKJ0BG3V-lzQv0E0SOxCe806okIZwbGnkofG1RQef06zkBMt4w8aplvedPMeadBXKB1yDcsaCy7TXpO5qd~N9g76FrqhA4AdSlSNmZzD33XCJ8VZAZ5m0fJxgOTfWvmrUqL6xSjrJBMm9zk0YxFGBWsxK7v1U36Hy3eInfmW-iGtP9Ksd2~o-DA__"
        />
        <img
          className="h-20 w-20 absolute top-[120px] left-[560px] rotate-180 z-0"
          src="https://s3-alpha-sig.figma.com/img/fb39/0c4b/10470aa903b54e8e9e856c5046a0fc6f?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lOu7BMeeN7ffr47QMMSjwHSudMUHH-H1Ti3ryoGKqlOMkPZe5ApXM920boTMgpHRtpnOjAjJyGGHR8ABB9~mnSP3kD3bQvfllakxKApZpH9JQs-JNU3M6ah-Tc1Yn2f5UA6jql9ENFY7GV~PguhOOOAzUgCAkF0fKJ0BG3V-lzQv0E0SOxCe806okIZwbGnkofG1RQef06zkBMt4w8aplvedPMeadBXKB1yDcsaCy7TXpO5qd~N9g76FrqhA4AdSlSNmZzD33XCJ8VZAZ5m0fJxgOTfWvmrUqL6xSjrJBMm9zk0YxFGBWsxK7v1U36Hy3eInfmW-iGtP9Ksd2~o-DA__"
        />
        <img
          className="h-20 w-20 absolute top-[400px] left-[500px] rotate-270 z-0"
          src="https://s3-alpha-sig.figma.com/img/fb39/0c4b/10470aa903b54e8e9e856c5046a0fc6f?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lOu7BMeeN7ffr47QMMSjwHSudMUHH-H1Ti3ryoGKqlOMkPZe5ApXM920boTMgpHRtpnOjAjJyGGHR8ABB9~mnSP3kD3bQvfllakxKApZpH9JQs-JNU3M6ah-Tc1Yn2f5UA6jql9ENFY7GV~PguhOOOAzUgCAkF0fKJ0BG3V-lzQv0E0SOxCe806okIZwbGnkofG1RQef06zkBMt4w8aplvedPMeadBXKB1yDcsaCy7TXpO5qd~N9g76FrqhA4AdSlSNmZzD33XCJ8VZAZ5m0fJxgOTfWvmrUqL6xSjrJBMm9zk0YxFGBWsxK7v1U36Hy3eInfmW-iGtP9Ksd2~o-DA__"
        />
        <img
          className="h-20 w-20 absolute top-[230px] right-[100px] rotate-90 z-0"
          src="https://s3-alpha-sig.figma.com/img/fb39/0c4b/10470aa903b54e8e9e856c5046a0fc6f?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lOu7BMeeN7ffr47QMMSjwHSudMUHH-H1Ti3ryoGKqlOMkPZe5ApXM920boTMgpHRtpnOjAjJyGGHR8ABB9~mnSP3kD3bQvfllakxKApZpH9JQs-JNU3M6ah-Tc1Yn2f5UA6jql9ENFY7GV~PguhOOOAzUgCAkF0fKJ0BG3V-lzQv0E0SOxCe806okIZwbGnkofG1RQef06zkBMt4w8aplvedPMeadBXKB1yDcsaCy7TXpO5qd~N9g76FrqhA4AdSlSNmZzD33XCJ8VZAZ5m0fJxgOTfWvmrUqL6xSjrJBMm9zk0YxFGBWsxK7v1U36Hy3eInfmW-iGtP9Ksd2~o-DA__"
        />
      </div>

     <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ReferralForm />
      </Modal>
    </div>
  );
};

export default HeroSection;

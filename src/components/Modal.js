import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed modal inset-0 bg-black bg-opacity-50 flex items-center justify-center border">
      <div className="bg-white p-8 rounded-md relative">
        <div className="border flex items-center justify-center bg-red-600  p-1 rounded-full absolute right-[-8px] top-[-10px] cursor-pointer">
          <IoCloseSharp className="text-white text-md" onClick={onClose} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;

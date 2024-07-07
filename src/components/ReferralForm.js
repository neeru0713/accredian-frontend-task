import React, { useState } from "react";
import TextField from "./TextField";
import Selector from "./Selector";
import Button from "./Button";
const ReferralForm = () => {
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
    course: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const courseOptions = [
    {
      value: "C",
      label: "Course",
    },
    {
      value: "PCPM",
      label: "Professional Certificate Program in Product Management",
    },
    {
      value: "PGCSPM",
      label: "PG Certificate Program in Strategic Product Management",
    },
    {
      value: "EDDPM",
      label: "Exeutive Program in Data Driven Product Management",
    },
    {
      value: "EPMDT",
      label:
        "Exeutive Program in Product Management and Digital Transformation",
    },
    { value: "EPM", label: "Exeutive Program in Product Management" },
    { value: "ACPM", label: "Advanced Certification in Product Management" },
    {
      value: "EPMPM",
      label: "Exeutive Program in Product Management and Project Management",
    },
  ];

  return (
    <form className="flex flex-col gap-4 w-[400px]">
      <h1 className="text-[#3c82f6] font-semibold text-2xl">Referral Form</h1>

      <TextField
        type="text"
        name="referrerName"
        value={formData.referrerName}
        onChange={handleChange}
        label="Your Name"
        width="100%"
        inputWidth="400"
      />

      <TextField
        type="text"
        name="referrerEmail"
        value={formData.referrerEmail}
        onChange={handleChange}
        label="Your Email"
        width="100%"
        inputWidth="400"
      />

      <TextField
        type="text"
        name="refereeName"
        value={formData.refereeName}
        onChange={handleChange}
        label="Friend's Name"
        width="100%"
        inputWidth="400"
      />

      <TextField
        type="email"
        name="refereeEmail"
        value={formData.refereeEmail}
        onChange={handleChange}
        label="Friend's Email"
        width="100%"
        inputWidth="400"
      />

      <Selector
        name="course"
        options={courseOptions}
        value={formData.course}
        onChange={handleChange}
        label="Select Course"
        width="400"
      />
      <div className="flex flex-row-reverse w-full ">
        <Button width="180" name="Submit" type="primary" onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default ReferralForm;

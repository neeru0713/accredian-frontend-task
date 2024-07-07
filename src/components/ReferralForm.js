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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.referrerName) newErrors.referrerName = "Referrer name is required";
    if (!formData.referrerEmail) {
      newErrors.referrerEmail = "Referrer email is required";
    } else if (!validateEmail(formData.referrerEmail)) {
      newErrors.referrerEmail = "Invalid email format";
    }
    if (!formData.refereeName) newErrors.refereeName = "Referee name is required";
    if (!formData.refereeEmail) {
      newErrors.refereeEmail = "Referee email is required";
    } else if (!validateEmail(formData.refereeEmail)) {
      newErrors.refereeEmail = "Invalid email format";
    }
    if (!formData.course || formData.course === "C") newErrors.course = "Please select a course";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted:", formData);
    } else {
      setErrors(formErrors);
    }
  };

  const courseOptions = [
    { value: "C", label: "Course" },
    { value: "PCPM", label: "Professional Certificate Program in Product Management" },
    { value: "PGCSPM", label: "PG Certificate Program in Strategic Product Management" },
    { value: "EDDPM", label: "Executive Program in Data Driven Product Management" },
    { value: "EPMDT", label: "Executive Program in Product Management and Digital Transformation" },
    { value: "EPM", label: "Executive Program in Product Management" },
    { value: "ACPM", label: "Advanced Certification in Product Management" },
    { value: "EPMPM", label: "Executive Program in Product Management and Project Management" },
  ];

  return (
    <form className="flex flex-col gap-4 w-[400px]" onSubmit={handleSubmit} noValidate>
      <h1 className="text-[#3c82f6] font-semibold text-2xl">Referral Form</h1>

      <TextField
        type="text"
        name="referrerName"
        value={formData.referrerName}
        onChange={handleChange}
        label="Your Name"
        width="100%"
        inputWidth="400"
        error={errors.referrerName}
        required={true}
      />

      <TextField
        type="text"
        name="referrerEmail"
        value={formData.referrerEmail}
        onChange={handleChange}
        label="Your Email"
        width="100%"
        inputWidth="400"
        error={errors.referrerEmail}
        required={true}
      />

      <TextField
        type="text"
        name="refereeName"
        value={formData.refereeName}
        onChange={handleChange}
        label="Friend's Name"
        width="100%"
        inputWidth="400"
        error={errors.refereeName}
        required={true}
      />

      <TextField
        type="email"
        name="refereeEmail"
        value={formData.refereeEmail}
        onChange={handleChange}
        label="Friend's Email"
        width="100%"
        inputWidth="400"
        error={errors.refereeEmail}
        required={true}
      />

      <Selector
        name="course"
        options={courseOptions}
        value={formData.course}
        onChange={handleChange}
        label="Select Course"
        width="400"
        error={errors.course}
        required={true}
      />
      <div className="flex flex-row-reverse w-full ">
        <Button width="180" name="Submit" type="primary" />
      </div>
    </form>
  );
};

export default ReferralForm;

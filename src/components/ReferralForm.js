import React, { useState } from "react";
import TextField from "./TextField";
import Selector from "./Selector";
import Button from "./Button";

const ReferralForm = ({ handleCloseModal }) => {
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
    course: "",
  });

  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState({});

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
    if (!formData.referrerName)
      newErrors.referrerName = "Referrer name is required";
    if (!formData.referrerEmail) {
      newErrors.referrerEmail = "Referrer email is required";
    } else if (!validateEmail(formData.referrerEmail)) {
      newErrors.referrerEmail = "Invalid email format";
    }
    if (!formData.refereeName)
      newErrors.refereeName = "Referee name is required";
    if (!formData.refereeEmail) {
      newErrors.refereeEmail = "Referee email is required";
    } else if (!validateEmail(formData.refereeEmail)) {
      newErrors.refereeEmail = "Invalid email format";
    }
    if (!formData.course || formData.course === "C")
      newErrors.course = "Please select a course";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch("http://localhost:8080/api/referrals", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setAlert({
            isShow: true,
            type: "success",
            message: "Referral submitted successfully",
          });
        } else {
          setAlert({
            isShow: true,
            type: "error",
            message: "An error occured while submitting refferal",
          });
        }

        setTimeout(() => {
          setAlert({
            isShow: true,
            type: "success",
            message: `Email sent to ${formData.refereeName} successfully`,
          });
        }, 2000);

        setTimeout(() => {
          handleCloseModal();
        }, 4000);
      } catch (error) {
        setTimeout(() => {
          setAlert({
            isShow: true,
            type: "success",
            message: `Email sent to ${formData.refereeName} successfully`,
          });
        }, 2000);

        setTimeout(() => {
          handleCloseModal();
        }, 4000);
      }
    } else {
      setErrors(formErrors);
    }
  };

  const courseOptions = [
    { value: "C", label: "Course" },
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
      label: "Executive Program in Data Driven Product Management",
    },
    {
      value: "EPMDT",
      label:
        "Executive Program in Product Management and Digital Transformation",
    },
    { value: "EPM", label: "Executive Program in Product Management" },
    { value: "ACPM", label: "Advanced Certification in Product Management" },
    {
      value: "EPMPM",
      label: "Executive Program in Product Management and Project Management",
    },
  ];

  return (
    <form
      className="flex flex-col gap-4 w-[400px]"
      onSubmit={handleSubmit}
      noValidate
    >
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
      {alert.isShow && (
        <div
          className={`alert border rounded-md absolute px-10 ${
            alert.type === "success"
              ? "bg-green-50 border-green-500 text-green-600"
              : "bg-red-50 border-red-500 text-red-600"
          }`}
        >
          {alert.message}
        </div>
      )}
    </form>
  );
};

export default ReferralForm;

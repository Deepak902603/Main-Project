import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phone: "",
    zipCode: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [focusFilled, setFocusFilled] = useState(null);
  const [success, setSuccess] = useState(false);

  /* ---------------- VALIDATION ---------------- */
  const formValidation = (field, value) => {
    switch (field) {
      case "firstName":
        if (!value.trim()) return "First name is required";
        return "";

      case "lastName":
        if (!value.trim()) return "Last name is required";
        return "";

      case "gender":
        if (!value) return "Please select gender";
        return "";

      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^\S+@\S+\.\S+$/.test(value))
          return "Enter a valid email";
        return "";

      case "phone":
        if (!/^[0-9]{10}$/.test(value))
          return "Phone must be 10 digits";
        return "";

      case "zipCode":
        if (!/^[0-9]{5,6}$/.test(value))
          return "Invalid zip code";
        return "";

      case "message":
        if (!value.trim()) return "Message is required";
        return "";

      default:
        return "";
    }
  };

  /* ---------------- HANDLERS ---------------- */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const error = formValidation(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleBlur = (field) => {
    const error = formValidation(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
    setFocusFilled(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = formValidation(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        setFormData({
          firstName: "",
          lastName: "",
          gender: "",
          email: "",
          phone: "",
          zipCode: "",
          message: "",
        });
      }, 3000);
    }
  };

  /* ---------------- PROGRESS ---------------- */
  const totalFields = Object.keys(formData).length;
  const filledFields = Object.values(formData).filter(
    (v) => v.trim?.() !== "" || v !== ""
  ).length;
  const completion = Math.round((filledFields / totalFields) * 100);

  return (
    <div className="min-h-screen bg-black flex justify-center items-center p-4">
      <div className="w-full max-w-4xl p-8 border border-gray-500 text-white relative">
        <h1 className="text-3xl font-bold text-center">
           Registration form by Deepak
        </h1>

        <p className="mt-2 text-gray-400 text-center">
          Please fill out all required fields below
        </p>

        {/* Progress */}
        <div className="flex justify-between mt-6">
          <span className="text-gray-300">Form Completion</span>
          <span>{completion}%</span>
        </div>
        <div className="h-2 mt-2 bg-gray-700">
          <div
            className="h-2 bg-green-500 transition-all"
            style={{ width: `${completion}%` }}
          ></div>
        </div>

        {/* FORM */}
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <Input label="First Name *" name="firstName" formData={formData} errors={errors} handleChange={handleChange} handleBlur={handleBlur} />

            {/* Last Name */}
            <Input label="Last Name *" name="lastName" formData={formData} errors={errors} handleChange={handleChange} handleBlur={handleBlur} />

            {/* Gender */}
            <div className="space-y-2">
              <label className="text-gray-400 block text-left">Gender *</label>
              <div className="flex gap-6">
                {["Male", "Female", "Other"].map((g) => (
                  <label key={g} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value={g}
                      checked={formData.gender === g}
                      onChange={handleChange}
                    />
                    {g}
                  </label>
                ))}
              </div>
              {errors.gender && (
                <span className="text-red-500 animate-pulse">
                  {errors.gender}
                </span>
              )}
            </div>

            <Input label="Email *" name="email" formData={formData} errors={errors} handleChange={handleChange} handleBlur={handleBlur} />
            <Input label="Phone *" name="phone" formData={formData} errors={errors} handleChange={handleChange} handleBlur={handleBlur} />
            <Input label="Zip Code *" name="zipCode" formData={formData} errors={errors} handleChange={handleChange} handleBlur={handleBlur} />

            {/* Message */}
            <div className="md:col-span-2 space-y-2">
              <label className="text-gray-400 block text-left">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={() => handleBlur("message")}
                rows="4"
                className="w-full border border-gray-500 bg-black px-3 py-4 text-white focus:outline-none"
              />
              {errors.message && (
                <span className="text-red-500 animate-pulse">
                  {errors.message}
                </span>
              )}
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="mt-8 w-full bg-blue-600 hover:bg-blue-700 py-4 text-lg font-semibold transition"
          >
            Submit Registration
          </button>
        </form>

        {/* SUCCESS POPUP */}
        {success && (
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
            <div className="bg-gray-900 border border-green-500 p-10 text-center rounded-lg animate-pulse">
              <div className="text-6xl text-green-500 mb-4">✔</div>
              <h2 className="text-2xl font-bold text-green-400">
                Registration Successful
              </h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* --------- Reusable Input Component --------- */
const Input = ({ label, name, formData, errors, handleChange, handleBlur }) => (
  <div className="space-y-2">
    <label className="text-gray-400 block text-left">{label}</label>
    <input
      type="text"
      name={name}
      value={formData[name]}
      onChange={handleChange}
      onBlur={() => handleBlur(name)}
      className={`w-full border px-3 py-4 bg-black text-white focus:outline-none
        ${
          errors[name]
            ? "border-red-500 animate-pulse"
            : formData[name]
            ? "border-green-500"
            : "border-gray-500"
        }`}
    />
    {errors[name] && (
      <span className="text-red-500 animate-pulse">{errors[name]}</span>
    )}
  </div>
);

export default App;

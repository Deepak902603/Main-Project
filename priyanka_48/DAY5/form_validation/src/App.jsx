import React, { useState } from "react";
import { useForm } from "react-hook-form";          
import { yupResolver } from "@hookform/resolvers/yup"; 
import * as yup from "yup";                         
import "./App.css";                                 

/* ===============================
   Validation Schema (Yup)
================================ */
const schema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email"),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

/* ===============================
   Main Component
================================ */
function App() {
  const [successMsg, setSuccessMsg] = useState("");

  // useForm hook
  const {
    register,      // connects input fields
    handleSubmit,  // handles submit
    formState: { errors }, // validation errors
    reset
  } = useForm({
    resolver: yupResolver(schema),
  });

  /* ===============================
    On Submit Function
  ================================ */
  const onSubmit = (data) => {
    console.log("Form Data:", data);   // CHECK CONSOLE
    setSuccessMsg(" Login Successful!");
    reset();
  };

  return (
    <div className="container">
      <form className="login-box" onSubmit={handleSubmit(onSubmit)}>

        <h2>Login</h2>

        {/* Email Field */}
        <input
          type="email"
          placeholder="Enter Email"
          {...register("email")}
        />
        <p className="error">{errors.email?.message}</p>

        {/* Password Field */}
        <input
          type="password"
          placeholder="Enter Password"
          {...register("password")}
        />
        <p className="error">{errors.password?.message}</p>

        {/* Login Button */}
        <button type="submit">Login</button>

        {/* Success Message */}
        {successMsg && <p className="success">{successMsg}</p>}
      </form>
    </div>
  );
}

export default App;

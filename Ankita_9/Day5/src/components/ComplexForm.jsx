import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../validation/schema";

const ComplexForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Registration Successful 🎉");
  };

  return (
    <form className="form-card" onSubmit={handleSubmit(onSubmit)}>
      <h2>Registration Form</h2>

      {/* Full Name */}
      <input
        type="text"
        placeholder="Full Name"
        {...register("fullName")}
      />
      <p className="error">{errors.fullName?.message}</p>

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        {...register("email")}
      />
      <p className="error">{errors.email?.message}</p>

      {/* Password */}
      <input
        type="password"
        placeholder="Password"
        {...register("password")}
      />
      <p className="error">{errors.password?.message}</p>

      {/* Confirm Password */}
      <input
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword")}
      />
      <p className="error">{errors.confirmPassword?.message}</p>

      {/* Age */}
      <input
        type="number"
        placeholder="Age"
        {...register("age")}
      />
      <p className="error">{errors.age?.message}</p>

      {/* Gender */}
      <select {...register("gender")}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <p className="error">{errors.gender?.message}</p>

      {/* Skills */}
      <div className="checkbox-group">
        <label>
          <input type="checkbox" value="React" {...register("skills")} />
          React
        </label>
        <label>
          <input type="checkbox" value="Node" {...register("skills")} />
          Node
        </label>
      </div>
      <p className="error">{errors.skills?.message}</p>

      {/* Country */}
      <select {...register("country")}>
        <option value="">Select Country</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
      </select>
      <p className="error">{errors.country?.message}</p>

      {/* Terms */}
      <label style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
        <input type="checkbox" {...register("terms")} />
        Accept Terms & Conditions
      </label>
      <p className="error">{errors.terms?.message}</p>

      {/* Submit Button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ComplexForm;

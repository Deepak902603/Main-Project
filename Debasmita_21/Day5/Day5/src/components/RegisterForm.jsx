import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "../schemas/registerSchema";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      terms: false,
    },
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);

    // simulate successful submit
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <input placeholder="Name" {...register("name")} />
        <p>{errors.name?.message}</p>

        {/* Email */}
        <input placeholder="Email" {...register("email")} />
        <p>{errors.email?.message}</p>

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>

        {/* Age */}
        <input
          type="number"
          placeholder="Age"
          {...register("age", { valueAsNumber: true })}
        />
        <p>{errors.age?.message}</p>

        {/* Gender */}
        <select {...register("gender")}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <p>{errors.gender?.message}</p>

        {/* Terms */}
        <label>
          <input type="checkbox" {...register("terms")} /> Accept Terms
        </label>
        <p>{errors.terms?.message}</p>

        <button type="submit">Register</button>
      </form>

      {/* Success Message */}
      {isSubmitSuccessful && (
        <p style={{ color: "green" }}>
          Registration successful!
        </p>
      )}
    </>
  );
}

export default RegisterForm;

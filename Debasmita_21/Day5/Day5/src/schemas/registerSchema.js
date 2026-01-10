import * as yup from "yup";

const registerSchema = yup.object({
  name: yup.string().required("Name is required"),

  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),

  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),

  age: yup
    .number()
    .typeError("Age must be a number")
    .positive("Age must be positive")
    .min(18, "You must be at least 18")
    .required("Age is required"),

  gender: yup.string().required("Gender is required"),

  terms: yup.boolean().oneOf([true], "You must accept terms"),
});

export default registerSchema;

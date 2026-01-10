import * as yup from "yup";

export const schema = yup.object({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email required"),
  password: yup.string().min(6, "Min 6 chars").required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required(),
  age: yup.number().min(18, "Must be 18+").required(),
  gender: yup.string().required("Select gender"),
  skills: yup.array().min(1, "Select at least one skill"),
  country: yup.string().required("Select country"),
  terms: yup.boolean().oneOf([true], "Accept terms")
});

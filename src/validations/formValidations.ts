import * as yup from "yup";

export const signupSchema = yup.object().shape({
  firstname: yup.string().required("First Name is required"),
  lastname: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[\W_]/, "Password must contain at least one special character")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const linkSchema = yup.object().shape({
  otp: yup
    .string()
    .length(6, "link must be 6 digits long")
    .required("link is required"),
});

export const businessDetailsSchema = yup
  .object({
    company_name: yup.string().required("Company name is required"),
    country: yup.string().required("Please select a country"),
    company_type: yup.string().required("Please select a company type"),
    company_size: yup.string().required("Please select a company size"),
    annual_revenue: yup.string().required("Please select a revenue range"),
    start_year: yup.string().required("Please select a year"),
    company_role: yup.string().required("Please select your role"),
    phone: yup.string().required("Please enter your phone"),
    province: yup.string().required("Please enter your province"),
    // revenue: yup.string().required("Please enter your revenue range"),
  })
  .required();

export const emailSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
});
export const passwordSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[\W_]/, "Password must contain at least one special character")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

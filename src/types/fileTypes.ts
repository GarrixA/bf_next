import { linkSchema } from "../validations/formValidations";
import * as yup from "yup";

export type BusinessDetailsFormValues = {
  // revenue: string;
  company_name: string;
  company_type: string;
  company_size: string;
  start_year: string;
  annual_revenue: string;
  company_role: string;
  phone: string;
  province: string;
  country: string;
};

export type PricingFormValues = {
  crop_id: string;
  country_id: string;
  duration: string;
};

export type LinkComponentFieldProps = yup.InferType<typeof linkSchema>;

export type RequestNewLinkComponentFieldProps = {
  email: string;
};

export type CreatePasswordFormInputs = {
  password: string;
  confirmPassword: string;
};

export const currentYear = new Date().getFullYear();
export const years = Array.from(
  new Array(currentYear - 1900 + 1),
  (_, index) => `${1900 + index}`
);

export type DynamicType = {
  [key: string]: any;
};

export type RegisterTypes = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type ResetType = {
  email: string;
};

export type PasswordType = {
  password: string;
};

export type LoginTypes = {
  email: string;
  password: string;
};

export type GetCropState = {
  isLoading: boolean;
  getError?: string | null;
  cropList: any[];
};
export type GetCountryState = {
  isLoading: boolean;
  getError?: string | null;
  countryList: any[];
};

export type ReducerTypes = {
  isLoading: boolean;
  data?: DynamicType;
  error: string | null;
  isVerified?: boolean;
  message?: string | null;
};

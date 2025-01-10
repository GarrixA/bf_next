/* eslint-disable @typescript-eslint/no-explicit-any */

import { useBusiness_profileMutation } from "@/store/actions/auth";
import { BusinessDetailsFormValues, years } from "@/types/fileTypes";
import { businessDetailsSchema } from "@/validations/formValidations";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import Cookies from "js-cookie";
import { decodeToken } from "@/utils/config/decode";
import SignupLeftSection from "./SignupLeftSection";
import Logo from "@public/logos/base_food_white_logo.png";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import {
  companySizes,
  companyTypes,
  countries,
  revenueRanges,
  roles,
} from "@/utils/countriesData";

interface BusinessDetailsProps {
  onSubmit: (data: BusinessDetailsFormValues) => void;
  defaultValues?: BusinessDetailsFormValues;
}

const BusinessProfileComponent: React.FC<BusinessDetailsProps> = ({
  onSubmit,
  defaultValues,
}) => {
  const [business_profile, { isLoading }] = useBusiness_profileMutation();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BusinessDetailsFormValues>({
    resolver: yupResolver(businessDetailsSchema),
    mode: "onSubmit",
    defaultValues: defaultValues ?? {},
  });

  const onSubmitForm = async (data: BusinessDetailsFormValues) => {
    try {
      const res = await business_profile(data).unwrap();
      toast.success(res?.message);
      Cookies.set("access_token", res.auth_token);
      const decodedToken = decodeToken(res.auth_token);
      Cookies.set("userInfo", JSON.stringify(decodedToken));
      onSubmit(data);
    } catch (error: any) {
      toast.error(error?.data?.message);
      console.error("Error submitting business details:", error);
    }
  };

  const features = [
    "Aggregate and analyze agricultural data from multiple sources",
    "Visualize crop yields and market trends in real-time",
    "Leverage AI for predictive farming insights",
    "Connect with a network of farmers and agri-experts",
  ];

  return (
    <div className="flex h-screen">
      <SignupLeftSection logo={Logo.src} features={features} />

      <div className="w-full px-[4%] flex items-center justify-center">
        <div className="p-6 bg-white rounded-lg w-full">
          <h1 className="text-2xl font-semibold mb-6">Company Information</h1>
          <form
            onSubmit={handleSubmit(onSubmitForm)}
            className="space-y-3 2xl:space-y-6"
          >
            {/* <p>Form Errors: {JSON.stringify(errors)}</p> */}
            <div>
              <Controller
                name="company_name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    className={`w-full p-2 border ${
                      errors.company_name ? "border-red-500" : "border-gray-300"
                    } rounded-md`}
                    placeholder="Enter company name"
                  />
                )}
              />
              {errors.company_name && (
                <p className="text-red text-sm mt-1">
                  {errors.company_name.message}
                </p>
              )}
            </div>

            <div>
              <FormControl
                fullWidth
                size="small"
                error={Boolean(errors.country)}
              >
                <InputLabel>Select country</InputLabel>
                <Controller
                  name="country"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field} size="small" label="Select country">
                      {countries.map((country) => (
                        <MenuItem key={country.code} value={country.code}>
                          {country.name}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
              {errors.country && (
                <p className="text-red text-sm mt-1">
                  {errors.country.message}
                </p>
              )}
            </div>

            <div>
              <Controller
                name="province"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    className={`w-full p-2 border ${
                      errors.province ? "border-red-500" : "border-gray-300"
                    } rounded-md`}
                    placeholder="Enter province"
                  />
                )}
              />
              {errors.province && (
                <p className="text-red text-sm mt-1">
                  {errors.province.message}
                </p>
              )}
            </div>

            <div>
              <FormControl
                fullWidth
                size="small"
                error={Boolean(errors.company_type)}
              >
                <InputLabel>Select company type</InputLabel>
                <Controller
                  name="company_type"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field} size="small" label="Select company type">
                      {companyTypes.map((type, index) => (
                        <MenuItem key={index} value={type.value}>
                          {type.name}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
              {errors.company_type && (
                <p className="text-red text-sm mt-1">
                  {errors.company_type.message}
                </p>
              )}
            </div>

            <div>
              <FormControl
                fullWidth
                size="small"
                error={Boolean(errors.company_size)}
              >
                <InputLabel>Select company size</InputLabel>
                <Controller
                  name="company_size"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field} size="small" label="Select company size">
                      {companySizes.map((size, index) => (
                        <MenuItem key={index} value={size.value}>
                          {size.name}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
              {errors.company_size && (
                <p className="text-red text-sm mt-1">
                  {errors.company_size.message}
                </p>
              )}
            </div>

            <div>
              <FormControl
                fullWidth
                size="small"
                error={Boolean(errors.start_year)}
              >
                <InputLabel>Select year founded</InputLabel>
                <Controller
                  name="start_year"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field} size="small" label="Select year">
                      {years
                        .slice()
                        .reverse()
                        .map((year, index) => (
                          <MenuItem key={index} value={year}>
                            {year}
                          </MenuItem>
                        ))}
                    </Select>
                  )}
                />
              </FormControl>
              {errors.start_year && (
                <p className="text-red text-sm mt-1">
                  {errors.start_year.message}
                </p>
              )}
            </div>

            <div>
              <FormControl
                fullWidth
                size="small"
                error={Boolean(errors.annual_revenue)}
              >
                <InputLabel>Select annual revenue</InputLabel>
                <Controller
                  name="annual_revenue"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select
                      {...field}
                      size="small"
                      label="Select annual revenue"
                    >
                      {revenueRanges.map((range, index) => (
                        <MenuItem key={index} value={range.value}>
                          {range.name}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
              {errors.annual_revenue && (
                <p className="text-red text-sm mt-1">
                  {errors.annual_revenue.message}
                </p>
              )}
            </div>

            <div>
              <FormControl
                fullWidth
                size="small"
                error={Boolean(errors.company_role)}
              >
                <InputLabel>Select role</InputLabel>
                <Controller
                  name="company_role"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field} size="small" label="Select role">
                      {roles.map((role, index) => (
                        <MenuItem key={index} value={role.value}>
                          {role.name}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
              {errors.company_role && (
                <p className="text-red text-sm mt-1">
                  {errors.company_role.message}
                </p>
              )}
            </div>

            <div>
              <Controller
                name="phone"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    className={`w-full p-2 border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } rounded-md`}
                    placeholder="Enter phone number"
                  />
                )}
              />
              {errors.phone && (
                <p className="text-red text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Next"}
              </button>
              {/* {error && <p className="text-red-500 text-sm mt-2">{error}</p>} */}
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BusinessProfileComponent;

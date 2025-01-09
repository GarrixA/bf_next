"use client";

import { useRequest_email_confirmationMutation } from "@/store/actions/auth";
import { emailSchema } from "@/validations/formValidations";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IoMdMail } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
interface RequestNewLinkComponentFieldProps {
  email: string;
}

const NewEmailConfirmationComponent = () => {
  const [request_email_confirmation, { isLoading }] =
    useRequest_email_confirmationMutation();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RequestNewLinkComponentFieldProps>({
    resolver: yupResolver(emailSchema),
  });

  const onSubmit: SubmitHandler<RequestNewLinkComponentFieldProps> = async (
    data
  ) => {
    try {
      const res = await request_email_confirmation(data).unwrap();
      console.log(res, "daaaaataaa");
      toast.success(res.message);
    } catch (error: any) {
      toast.error(error?.message || "Failed to send OTP. Please try again.");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-10 shadow-xl">
        <ToastContainer />
        <div className="w-full h-full flex flex-col items-center ">
          <IoMdMail className="text-[5rem] text-blue-600" />
          <h1 className="text-lg">Please enter your email for a new link</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full mx-auto py-4"
          >
            <div className="flex flex-col gap-4">
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Please enter your email"
                    variant="outlined"
                    fullWidth
                    className="bg-white"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className={`text-white bg-blue-700 px-5 py-3 w-full rounded-[5px] font-bold transition-all duration-300 ${
                    isLoading
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-blue-600"
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? "Requesting..." : "Request link"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewEmailConfirmationComponent;

"use client";

import { BusinessDetailsFormValues } from "@/types/fileTypes";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import SignupLeftSection from "./SignupLeftSection";
import Logo from "@public/logos/base_food_white_logo.png";
import { TextField } from "@mui/material";

interface ReviewBusinessDetailsProps {
  data: BusinessDetailsFormValues;
  onComplete: () => void;
  onEdit: () => void;
}

const BusinessProfileReviewComponent: React.FC<ReviewBusinessDetailsProps> = ({
  data,
  onComplete,
  onEdit,
}) => {
  const [loading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleComplete = () => {
    setIsLoading(true);
    toast.success("Thank you for completing the profile!");

    setTimeout(() => {
      setIsLoading(false);
      onComplete();
    }, 1000);

    setTimeout(() => {
      router.push("/");
    }, 4000);
  };

  const features = [
    "Aggregate and analyze agricultural data from multiple sources",
    "Visualize crop yields and market trends in real-time",
    "Leverage AI for predictive farming insights",
    "Connect with a network of farmers and agri-experts",
  ];

  return (
    <div className="h-screen flex">
      <SignupLeftSection logo={Logo.src} features={features} />
      <div className="w-full px-[4%] mx-auto flex items-center justify-center">
        <div className="w-full p-6 bg-white rounded-lg">
          <h1 className="text-2xl font-semibold mb-6">
            Review Your Company Information
          </h1>

          <div className="space-y-4">
            <div className="flex items-center">
              <TextField
                value={data.company_name}
                variant="outlined"
                fullWidth
                label="Company Name"
                InputProps={{
                  readOnly: true,
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                }}
              />
            </div>

            <div className="flex items-center">
              <TextField
                value={data.country}
                variant="outlined"
                fullWidth
                label="Country"
                InputProps={{
                  readOnly: true,
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                }}
              />
            </div>
            <div className="flex items-center">
              <TextField
                value={data.province}
                variant="outlined"
                fullWidth
                label="Country"
                InputProps={{
                  readOnly: true,
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                }}
              />
            </div>

            <div className="flex items-center">
              <TextField
                value={data.company_type}
                variant="outlined"
                fullWidth
                label="Company Type"
                InputProps={{
                  readOnly: true,
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                }}
              />
            </div>

            <div className="flex items-center">
              <TextField
                value={data.company_size}
                variant="outlined"
                fullWidth
                label="Company Size"
                InputProps={{
                  readOnly: true,
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                }}
              />
            </div>

            <div className="flex items-center">
              <TextField
                value={data.annual_revenue}
                variant="outlined"
                fullWidth
                label="Revenue Range"
                InputProps={{
                  readOnly: true,
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                }}
              />
            </div>

            <div className="flex items-center">
              <TextField
                value={data.start_year}
                variant="outlined"
                fullWidth
                label="Year Founded"
                InputProps={{
                  readOnly: true,
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                }}
              />
            </div>

            <div className="flex items-center">
              <TextField
                value={data.company_role}
                variant="outlined"
                fullWidth
                label="Role"
                InputProps={{
                  readOnly: true,
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                }}
              />
            </div>
            <div className="flex items-center">
              <TextField
                value={data.phone}
                variant="outlined"
                fullWidth
                label="Phone number"
                InputProps={{
                  readOnly: true,
                  sx: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
                }}
              />
            </div>
          </div>

          <div className="mt-4 flex justify-between gap-4">
            <button
              onClick={onEdit}
              className="w-full p-3 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
            >
              Edit
            </button>
            <button
              onClick={handleComplete}
              disabled={loading}
              className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              {loading ? "Completing..." : "Complete Registration"}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BusinessProfileReviewComponent;

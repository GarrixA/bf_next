"use client";

import VerifySkeleton from "@/components/common/skeletons/VerifySkeleton";
import { useVerify_userQuery } from "@/store/actions/auth";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { IoMdCloudDone } from "react-icons/io";
import { MdError } from "react-icons/md";
import { toast } from "react-toastify";

const VerifyEmailComponent = () => {
  const searchParams = useSearchParams();

  const status = searchParams.get("status");
  const message = searchParams.get("message");
  const { data, isLoading } = useVerify_userQuery({ status, message });

  useEffect(() => {
    const verifyUser = async () => {
      try {
        if (status && message) {
          const response = await data().unwrap();
          toast.success("Verified successfully");
          console.log(response, "Reeeeeeeessss");
        }
      } catch (error) {
        toast.error("Error verifying");
      }
    };
    verifyUser();
  }, [status, message]);

  console.log(message, "looogogogogogndkjfdnf");

  return (
    <div className="h-screen flex items-center justify-center">
      {isLoading ? (
        <VerifySkeleton />
      ) : status === "True" ? (
        <div className="flex flex-col items-center gap-2 justify-center pb-40">
          <IoMdCloudDone className="text-green text-[20rem]" />
          <h2 className="text-2xl logo mb-5">
            Your email was verified successfully
          </h2>
          <Link href={"/login"}>
            <button
              className="text-white bg-brand-blue px-5 py-2 cursor-pointer"
              type="submit"
            >
              Continue
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2 pb-40">
          <MdError className="text-[#ED4337] text-[9rem]" />
          <h2 className="text-2xl logo mb-5">
            Unable to verify your email, {message && message}
          </h2>
          <div className="flex items-center gap-3">
            Having trouble with the link?
            <Link href={"/auth/request_email_confirmation"}>
              <button className="text-brand-blue hover:underline" type="submit">
                Click here
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyEmailComponent;

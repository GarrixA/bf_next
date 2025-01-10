/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import React from "react";
import { IoIosMail } from "react-icons/io";

const ConfirmEmail = () => {
  return (
    <div className="shadow-xl p-10 h-screen flex flex-col items-center justify-center">
      {/* <ToastContainer /> */}
      <div className="flex flex-col justify-center items-center border-b-2 pb-4">
        <IoIosMail className="text-5xl text-green-600" />
        <h1 className="text-center text-2xl logo">
          CONFIRM YOUR EMAIL ADDRESS
        </h1>
      </div>
      <div className="max-w-md">
        <h1 className="my-4">
          Please check your email and confirm you email to continue, if you
          can't find the verification link check in spam box
        </h1>

        <div className="flex justify-center mt-5">
          <div className="text-base helvetica text-center">
            <h1>
              Having problems with the link?
              <Link href={"/auth/request_email_confirmation"}>
                <span className="text-brand-blue cursor-pointer ml-2 hover:underline">
                  Request new
                </span>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail;

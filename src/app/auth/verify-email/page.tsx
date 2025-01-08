"use client";

import VerifyEmailComponent from "@/components/auth/VerifyEmailComponent";
import { store } from "@/store";
import React from "react";
import { Provider } from "react-redux";

const VerifyEmailPage = () => {
  return (
    <>
      <Provider store={store}>
        <VerifyEmailComponent />
      </Provider>
    </>
  );
};

export default VerifyEmailPage;

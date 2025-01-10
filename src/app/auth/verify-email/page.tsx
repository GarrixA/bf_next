"use client";

import VerifyEmailComponent from "@/components/auth/VerifyEmailComponent";
import { store } from "@/store";
import React, { Suspense } from "react";
import { Provider } from "react-redux";

const VerifyEmailPage = () => {
  return (
    <>
      <Provider store={store}>
        <Suspense>
          <VerifyEmailComponent />
        </Suspense>
      </Provider>
    </>
  );
};

export default VerifyEmailPage;

"use client";

import NewEmailConfirmationComponent from "@/components/auth/NewEmailConfirmationComponent";
import { store } from "@/store";
import React from "react";
import { Provider } from "react-redux";

const NewEmailConfirmationPage = () => {
  return (
    <>
      <Provider store={store}>
        <NewEmailConfirmationComponent />
      </Provider>
    </>
  );
};

export default NewEmailConfirmationPage;

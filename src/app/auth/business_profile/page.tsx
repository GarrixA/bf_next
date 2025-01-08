"use client";

import BusinessProfileComponent from "@/components/auth/BusinessProfileComponent";
import BusinessProfileReviewComponent from "@/components/auth/BusinessProfileReviewComponent";
import { store } from "@/store";
import { BusinessDetailsFormValues } from "@/types/fileTypes";
import React, { useState } from "react";
import { Provider } from "react-redux";

const BusinessInfirmation = () => {
  const [formData, setFormData] = useState<
    BusinessDetailsFormValues | undefined
  >(undefined);
  const [isReviewing, setIsReviewing] = useState(false);

  const handleFormSubmit = (data: BusinessDetailsFormValues) => {
    setFormData(data);
    setIsReviewing(true);
  };

  const handleEditSection = () => {
    setIsReviewing(false);
  };

  const handleCompleteRegistration = () => {
    console.log("");
  };

  return (
    <div>
      {isReviewing && formData ? (
        <BusinessProfileReviewComponent
          data={formData}
          onEdit={handleEditSection}
          onComplete={handleCompleteRegistration}
        />
      ) : (
        <Provider store={store}>
          <BusinessProfileComponent
            onSubmit={handleFormSubmit}
            defaultValues={formData}
          />
        </Provider>
      )}
    </div>
  );
};

export default BusinessInfirmation;

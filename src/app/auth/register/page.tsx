"use client";

import SignupComponent from "@/components/auth/SignupComponent";
import { store } from "@/store";
import Logo from "@public/logos/base_food_white_logo.png";
import { TbPlant, TbChartBar, TbCloudComputing, TbUsers } from "react-icons/tb";
import { Provider } from "react-redux";

const SignupPage = () => {
  const features = [
    "Aggregate and analyze agricultural data from multiple sources",
    "Visualize crop yields and market trends in real-time",
    "Leverage AI for predictive farming insights",
    "Connect with a network of farmers and agri-experts",
  ];

  return (
    <div className="bg-white flex h-screen">
      <div className="hidden lg:flex flex-col w-[50%] h-full relative">
        <div className="absolute w-full h-full bg-black/70 inset-0 z-10"></div>
        <div className="w-full h-full">
          <img
            src="https://res.cloudinary.com/dq6npfdgz/image/upload/v1725875253/data_image7_tqfxiu.jpg"
            alt="Agricultural landscape"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-8 left-8 z-30">
          <img
            className="text-white w-[8rem] font-bold"
            src={Logo.src}
            alt="baseFood"
          />
        </div>
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-12">
          <h1 className="text-4xl font-[800] mb-8">
            Cultivate smarter decisions
          </h1>
          <div className="grid grid-cols-1 gap-6 w-full max-w-md">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4">
                {idx === 0 && <TbPlant className="text-2xl flex-shrink-0" />}
                {idx === 1 && <TbChartBar className="text-2xl flex-shrink-0" />}
                {idx === 2 && (
                  <TbCloudComputing className="text-2xl flex-shrink-0" />
                )}
                {idx === 3 && <TbUsers className="text-2xl flex-shrink-0" />}
                <p className="text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center w-full relative">
        <div className=" flex flex-col items-center justify-center space-y-6 w-[80%] py-5 rounded-lg">
          <div className="w-full max-w-md">
            <div>
              <h1 className="text-2xl space_grotesk2  text-center mb-10">
                Sign up for a <b className="font-bold">basefood</b> Account
              </h1>
            </div>
            <div className="">
              <div className="grid grid-cols-1 gap-x-2">
                <Provider store={store}>
                  <SignupComponent />
                </Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

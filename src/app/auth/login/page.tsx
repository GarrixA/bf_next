"use client";

import LoginFormComponent from "@/components/form/LoginFormComponent";
import { store } from "@/store";
import Logo from "@public/logos/7.png";
import { TbChartBar, TbCloudComputing, TbPlant, TbUsers } from "react-icons/tb";
import { Provider } from "react-redux";

const Login = () => {
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
          <h1 className="text-4xl space_grotesk font-bold mb-8">
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
                <p className="text-lg helvetica">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center w-[50%] bg-[url('https://res.cloudinary.com/dq6npfdgz/video/upload/v1725639485/4778066-uhd_2562_1440_25fps_ytvf2g.mp4')]">
        <div className="px-2 flex flex-col items-center justify-center space-y-6 w-[80%] h-3/5 rounded-lg">
          <div className="w-full max-w-md">
            <h1 className="text-2xl text-center space_grotesk2 text-black  mb-10">
              Log in to your <b className="font-bold">basefood</b> Account
            </h1>
            <Provider store={store}>
              <LoginFormComponent />
            </Provider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

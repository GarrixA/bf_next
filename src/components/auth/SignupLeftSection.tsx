import { TbChartBar, TbCloudComputing, TbPlant, TbUsers } from "react-icons/tb";

interface SignupLeftSectionProps {
  logo: string;
  features: string[];
}

const SignupLeftSection: React.FC<SignupLeftSectionProps> = ({
  logo,
  features,
}) => {
  return (
    <div className="hidden lg:flex flex-col w-full h-full relative">
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
          src={logo}
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
  );
};

export default SignupLeftSection;

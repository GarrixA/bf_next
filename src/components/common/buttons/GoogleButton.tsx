import { FcGoogle } from "react-icons/fc";

const BASE_URL = `${import.meta.url}`;

const GoogleButton = () => {
  const handleGoogleLogin = () => {
    window.location.href = `${BASE_URL}auth/google`;
  };
  return (
    <button
      type="button"
      className=" bg-[#e5e5e5] text-black px-5 py-3 w-full rounded-[5px] font-bold hover:bg-[#d1d0d0] transition-all helvetica duration-300 flex items-center justify-center gap-3"
      onClick={() => handleGoogleLogin()}
    >
      <FcGoogle className="text-2xl" />
      Continue with Google
    </button>
  );
};

export default GoogleButton;

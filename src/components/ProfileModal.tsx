"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */

import { profileModalVariants } from "@/utils/variants";
import { motion } from "framer-motion";
import Link from "next/link";
// import Cookies from "js-cookie";
import { useRouter } from "next/router";

interface ProfileModalProps {
  toggleDropdown: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ toggleDropdown }) => {
  const router = useRouter(); // Hook to use Next.js navigation

  //   const handleLogout = () => {
  //     Cookies.remove("access_token");
  //     toggleDropdown();
  //     router.push("/login");
  //   };

  return (
    <div className="w-full h-screen inset-0 fixed" onClick={toggleDropdown}>
      <motion.div
        className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#353535] shadow-lg rounded-lg z-50"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={profileModalVariants}
      >
        <div className="absolute right-5 top-16 mt-2 w-48 bg-white dark:bg-[#252525] rounded-lg shadow-lg z-10">
          <Link
            href="/profile" // Updated to Next.js Link
            className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={toggleDropdown}
          >
            Profile
          </Link>
          <Link
            href="/settings" // Updated to Next.js Link
            className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={toggleDropdown}
          >
            Settings
          </Link>
          <Link
            href="/subscriptions" // Updated to Next.js Link
            className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={toggleDropdown}
          >
            Subscriptions
          </Link>
          <button
            className="flex items-start px-4 w-full py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            // onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileModal;

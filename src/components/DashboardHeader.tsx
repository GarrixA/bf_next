"use client";

import { FaRegBell, FaSearch } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";
import ProfileDropdown from "@/components/ProfileDropdown";

interface HeaderProps {
  toggleSidebar: () => void;
  isCollapsed: boolean;
}

const Header = ({ toggleSidebar, isCollapsed }: HeaderProps) => {
  return (
    <header
      className={`fixed ${
        isCollapsed
          ? "lg:w-[100%] lg:ml-0 pl-24 pr-6 "
          : "lg:w-[85%] lg:ml-[15%] px-8"
      } flex items-center w-[100%] bg-white justify-between p-4 dark:bg-black dark:text-white border-b border-gray-200 z-20 dark:border-gray-700`}
    >
      <div className="flex items-center gap-3 relative lg:w-[25%]">
        <button onClick={toggleSidebar} className="lg:hidden">
          <IoMdMenu className="text-gray-900 dark:text-white text-3xl md:text-4xl" />
        </button>
        <div className="hidden md:flex items-center bg-bg-gray dark:bg-gray-800 rounded py-2 px-3 w-full">
          <FaSearch className="text-gray-500 dark:text-gray-400" />
          <input
            type="text"
            placeholder="Search by product or location"
            className="ml-2 bg-transparent border-none outline-none w-full text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 lg:text-xs 2xl:text-lg"
          />
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <button className="relative">
          <FiMail className="text-xl" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="relative">
          <FaRegBell className="text-xl" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <ProfileDropdown />
      </div>
    </header>
  );
};

export default Header;

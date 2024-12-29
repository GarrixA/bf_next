"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BsSun } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

interface ModeToggleProps {
  isCollapsed: boolean;
  sidebar?: boolean;
}

const ModeToggle = ({ isCollapsed, sidebar }: ModeToggleProps) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <MdDarkMode />;

  const isDarkMode = resolvedTheme === "dark";

  return (
    <div
      className={`flex items-center ${
        isCollapsed ? "justify-center" : "justify-between xl:px-2"
      } w-full py-4`}
    >
      {!isCollapsed && sidebar && (
        <div className="flex items-center pl-1 gap-1 xl:gap-3">
          {isDarkMode ? (
            <MdDarkMode className="text-md text-gray-400 text-base md:text-2xl lg:text-base xl:text-xl" />
          ) : (
            <BsSun className="text-md text-yellow-500 text-base md:text-2xl lg:text-base xl:text-xl" />
          )}
          <span
            className={`text-sm md:text-2xl lg:text-sm xl:text-sm whitespace-nowrap ${
              isDarkMode ? "text-gray-200" : "text-gray-900"
            }`}
          >
            {isDarkMode ? "Dark mode" : "Light mode"}
          </span>
        </div>
      )}
      <div
        className={`ml-2 relative inline-flex xl:h-6 xl:w-11 md:w-14 md:h-8 lg:h-5 lg:w-9 h-5 w-9 items-center rounded-full cursor-pointer transition-colors ${
          isDarkMode ? "bg-gray-600" : "bg-gray-300"
        }`}
        onClick={() => setTheme(isDarkMode ? "light" : "dark")}
      >
        <span
          className={`inline-block xl:h-5 xl:w-5 md:h-7 md:w-7 lg:h-4 lg:w-4 h-4 w-4 rounded-full bg-white transform transition-transform ${
            isDarkMode ? "translate-x-5" : "translate-x-1"
          }`}
        >
          {isDarkMode ? (
            <MdDarkMode className="absolute inset-0 m-auto text-gray-600 text-base md:text-2xl lg:text-base xl:text-xl" />
          ) : (
            <BsSun className="absolute inset-0 m-auto text-yellow-500 text-base md:text-2xl lg:text-base xl:text-xl" />
          )}
        </span>
      </div>
    </div>
  );
};

export default ModeToggle;

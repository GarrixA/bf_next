"use client";

import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import {
  useGetThemeQuery,
  useToggleThemeMutation,
} from "@/store/reducer/themeReducer";

interface ModeToggleProps {
  isCollapsed: boolean;
  sidebar?: boolean;
}

const ModeToggle = ({ isCollapsed, sidebar }: ModeToggleProps) => {
  const { data: theme = "dark" } = useGetThemeQuery(); // Fetch the current theme
  const [toggleTheme] = useToggleThemeMutation(); // Mutation to toggle the theme
  const isDarkMode = theme === "dark"; // Determine if the current mode is dark

  return (
    <div
      className={`flex items-center ${
        isCollapsed ? "justify-center" : "justify-between xl:px-2"
      } w-full py-4`}
    >
      {!isCollapsed && sidebar && (
        <div className="flex items-center pl-1 gap-1 xl:gap-3">
          {isDarkMode ? (
            <MdDarkMode
              className={`text-md ${
                isDarkMode
                  ? "text-gray-400 text-base md:text-2xl lg:text-base xl:text-xl"
                  : "text-yellow-500"
              }`}
            />
          ) : (
            <BsSun
              className={`text-md ${
                isDarkMode
                  ? "text-gray-400 text-base md:text-2xl lg:text-base xl:text-xl"
                  : "text-yellow-500"
              }`}
            />
          )}
          <span
            className={`text-sm md:text-2xl lg:text-sm xl:text-sm  whitespace-nowrap  ${
              isDarkMode ? "text-gray-200 " : "text-gray-900"
            }`}
          >
            {isDarkMode ? "Dark mode" : "Light mode"}
          </span>
        </div>
      )}
      <div
        onClick={() => toggleTheme()} // Trigger the mutation to toggle theme
        className={`ml-2 relative inline-flex xl:h-6 xl:w-11 md:w-14 md:h-8 lg:h-5 lg:w-9 h-5 w-9 items-center rounded-full cursor-pointer transition-colors ${
          isDarkMode ? "bg-gray-600" : "bg-gray-300"
        }`}
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

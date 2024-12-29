"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { createTheme, ThemeProvider, Tooltip } from "@mui/material";
import Logo from "@public/logos/7.png";
import whiteLogo from "@public/logos/base_food_white_logo.png";
import { useTheme } from "next-themes";
import NextLink from "next/link";
import { useState } from "react";
import { AiOutlineBell } from "react-icons/ai";
import {
  FaBars,
  FaChevronDown,
  FaChevronUp,
  FaPlus,
  FaShoppingBasket,
} from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { LuNewspaper } from "react-icons/lu";
import { MdOutlineLogout } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import ModeToggle from "./ModeToggle";

const tooltipTheme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#1e293b",
          color: "#ffffff",
          fontSize: "14px",
          padding: "4px 12px",
          borderRadius: "4px",
          fontFamily: "Helvetica Neue",
        },
        arrow: {
          color: "#1e293b",
        },
      },
    },
  },
});

interface SidebarProps {
  isSidebarVisible: boolean;
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
  toggleSidebar: () => void;
}

const Sidebar = ({
  isSidebarVisible,
  isCollapsed,
  setIsCollapsed,
  toggleSidebar,
}: SidebarProps) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isDashboardsOpen, setIsDashboardsOpen] = useState(false);
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);
  const toggleDashboards = () => setIsDashboardsOpen(!isDashboardsOpen);

  const handleItemClick = () => {
    if (isSidebarVisible) {
      toggleSidebar();
    }
  };

  const handleLogoutClick = () => {
    setOpenLogoutModal(true);
  };

  console.log(resolvedTheme);

  const handleCloseModal = () => {
    setOpenLogoutModal(false);
  };

  const handleConfirmLogout = () => {
    console.log("User logged out");
    setOpenLogoutModal(false);
  };

  return (
    <>
      <div
        className={`fixed z-40 left-0 top-0 h-[100vh] font-helveticaNue font-normal ${
          isCollapsed
            ? "w-20 border-r border-bg-gray dark:border-[#404040]"
            : "w-[80%] sm:w-[40%] md:w-[60%] lg:w-[16%] md:transition-none transition-all duration-300"
        } border-r border-bg-gray dark:border-[#404040] bg-white px-4 lg:px-2 2xl:px-4 flex flex-col justify-between dark:bg-black transform  ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 `}
      >
        <div>
          <div
            className={`flex items-center justify-between px-4 py-6 ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            {!isCollapsed && (
              <div className="flex items-center">
                <img
                  src={Logo.src}
                  alt="basefood"
                  className="w-[8rem] dark:hidden"
                />
                <img
                  src={whiteLogo.src}
                  alt="basefood"
                  className="w-[8rem] hidden dark:flex"
                />
              </div>
            )}
            <button
              onClick={toggleCollapse}
              className="hidden md:block focus:outline-none text-lg"
            >
              <FaBars className="text-gray-900 dark:text-white" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col justify-center">
            <ul className="flex flex-col space-y-2 text-sm md:text-2xl lg:text-[12px] xl:text-sm  2xl:text-lg">
              <NextLink href="/" onClick={handleItemClick}>
                <li className="flex items-center px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                  <GoHome className="lg:text-sm xl:text-lg text-gray-900 dark:text-white" />
                  {!isCollapsed && (
                    <span className="ml-2 xl:ml-4 text-gray-900 dark:text-white">
                      Today's Market
                    </span>
                  )}
                </li>
              </NextLink>
              <NextLink href="/news" onClick={handleItemClick}>
                <li className="flex items-center px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                  <LuNewspaper className="lg:text-sm xl:text-lg text-gray-900 dark:text-white" />
                  {!isCollapsed && (
                    <span className="ml-2 xl:ml-4 text-gray-900 dark:text-white">
                      Market News
                    </span>
                  )}
                </li>
              </NextLink>
              <li>
                <ThemeProvider theme={tooltipTheme}>
                  <Tooltip
                    title={`${isCollapsed ? "My Dashboards" : ""}`}
                    placement="right"
                  >
                    <div
                      className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded"
                      onClick={toggleDashboards}
                    >
                      <div className="flex items-center">
                        <RxDashboard className="lg:text-sm xl:text-lg text-gray-900 dark:text-white" />
                        {!isCollapsed && (
                          <NextLink
                            href={"/dashboard"}
                            onClick={handleItemClick}
                          >
                            <span className="ml-2 xl:ml-4 text-gray-900 dark:text-white">
                              My Dashboards
                            </span>
                          </NextLink>
                        )}
                      </div>
                      {!isCollapsed && (
                        <span className="text-gray-900 dark:text-white lg:ml-2 xl:ml-2 ml-3">
                          {isDashboardsOpen ? (
                            <FaChevronUp className="text-base md:text-xl lg:text-sm" />
                          ) : (
                            <FaChevronDown className="text-base md:text-xl lg:text-sm" />
                          )}
                        </span>
                      )}
                    </div>
                  </Tooltip>
                </ThemeProvider>
                {!isCollapsed && isDashboardsOpen && (
                  <ul className="xl:pl-10 lg:pl-4 pl-6 flex flex-col space-y-2">
                    <NextLink href={"/dashboard1"} onClick={handleItemClick}>
                      <li className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded">
                        <span className="text-gray-900 dark:text-white">
                          Dashboard 1
                        </span>
                      </li>
                    </NextLink>
                    <NextLink
                      href="/dashboards/new"
                      className="flex items-center"
                      onClick={handleItemClick}
                    >
                      <li className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded">
                        <FaPlus className="text-gray-900 dark:text-white text-sm" />
                        <span className="xl:ml-2 lg:ml-1 ml-2 text-gray-900 dark:text-white">
                          New Dashboard
                        </span>
                      </li>
                    </NextLink>
                  </ul>
                )}
              </li>
              <ThemeProvider theme={tooltipTheme}>
                <Tooltip
                  title={`${isCollapsed ? "Notifications" : ""}`}
                  placement="right"
                >
                  <li
                    className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded"
                    onClick={handleItemClick}
                  >
                    <AiOutlineBell className="lg:text-sm xl:text-lg text-gray-900 dark:text-white" />
                    {!isCollapsed && (
                      <span className="ml-2 xl:ml-4 text-gray-900 dark:text-white">
                        Notifications
                      </span>
                    )}
                  </li>
                </Tooltip>
              </ThemeProvider>

              <a href="/buyers" target="_blank">
                <ThemeProvider theme={tooltipTheme}>
                  <Tooltip
                    title={`${isCollapsed ? "Analytics" : ""}`}
                    placement="right"
                  >
                    <li
                      className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded"
                      onClick={handleItemClick}
                    >
                      <LiaMoneyCheckAltSolid className="lg:text-sm xl:text-lg text-gray-900 dark:text-white" />
                      {!isCollapsed && (
                        <span className="ml-2 xl:ml-4 text-gray-900 dark:text-white">
                          Find buyers
                        </span>
                      )}
                    </li>
                  </Tooltip>
                </ThemeProvider>
              </a>
              <NextLink href="/pricing" onClick={handleItemClick}>
                <ThemeProvider theme={tooltipTheme}>
                  <Tooltip
                    title={`${isCollapsed ? "Analytics" : ""}`}
                    placement="right"
                  >
                    <li className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded">
                      <FaShoppingBasket className="lg:text-sm xl:text-lg text-gray-900 dark:text-white" />
                      {!isCollapsed && (
                        <span className="ml-2 xl:ml-4 text-gray-900 dark:text-white">
                          Pricing
                        </span>
                      )}
                    </li>
                  </Tooltip>
                </ThemeProvider>
              </NextLink>
              <ThemeProvider theme={tooltipTheme}>
                <Tooltip
                  title={`${isCollapsed ? "Logout" : ""}`}
                  placement="right"
                >
                  <button
                    onClick={handleLogoutClick}
                    className="flex items-center py-2 pl-2 xl:px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                  >
                    <MdOutlineLogout className="lg:text-base md:text-2xl xl:text-lg" />
                    {!isCollapsed && (
                      <span
                        className="ml-1 text-sm xl:ml-4 md:text-2xl lg:text-sm"
                        onClick={handleItemClick}
                      >
                        Logout
                      </span>
                    )}
                  </button>
                </Tooltip>
              </ThemeProvider>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col space-y-2 py-4">
          <ModeToggle sidebar={true} isCollapsed={isCollapsed} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;

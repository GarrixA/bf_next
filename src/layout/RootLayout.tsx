"use client";

import Header from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/DashboardSidebar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme === "dark") {
      document.querySelector("body")?.classList.add("dark");
    } else {
      document.querySelector("body")?.classList.remove("dark");
    }
  }, [resolvedTheme]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsCollapsed(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="dark:bg-black flex relative w-full">
      <Sidebar
        isSidebarVisible={isSidebarVisible}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        toggleSidebar={toggleSidebar}
      />
      <div
        className={`overflow-x-hidden flex flex-col relative w-full md:w-full gap-2 commonScroll lg:mr-3`}
      >
        <Header toggleSidebar={toggleSidebar} isCollapsed={isCollapsed} />
        <main
          className={`py-4 md:px-8 mt-20 transition-transform w-full sm:w-full md:w-full bg-white dark:bg-black h-full ${
            isCollapsed ? "lg:w-[95%] lg:ml-[5%]" : "lg:w-[85%] lg:ml-[15%]"
          } duration-300`}
        >
          {children}
        </main>
      </div>
      {isSidebarVisible && (
        <div
          className="fixed inset-0 left-[20%] bg-black bg-opacity-25 z-30 xl:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default RootLayout;

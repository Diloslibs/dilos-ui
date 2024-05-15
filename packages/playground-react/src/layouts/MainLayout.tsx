import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/utils/cn";

import "@dilos/libs/dist/index.css";
import "@dilos/libs";

import { IStaticMethods } from "@dilos/libs";
import HamburgerLogo from "@/assets/icons/hamburger.svg";

declare global {
  interface Window {
    DStaticMethods: IStaticMethods;
  }
}

const MainLayout: React.FC = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  // handle resize window
  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth < 640) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // handle auto init
  useEffect(() => {
    window.DStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <span className="sr-only">Open sidebar</span>
        <img src={HamburgerLogo} alt="Hamburger" className="w-6 h-6" />
      </button>

      <aside
        id="default-sidebar"
        className={cn("fixed top-0 left-0 z-40 w-64 h-screen transition-transform", {
          "-translate-x-full": !isSidebarOpen,
          "translate-x-0": isSidebarOpen,
        })}
        aria-label="Sidebar"
      >
        <div className="h-full flex flex-col gap-3 px-3 py-4 overflow-y-auto bg-gray-800">
          <h1 className="p-2 text-white text-3xl font-semibold">
            <Link to="/">Dilos UI</Link>
          </h1>
          <hr />
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/accordion"
                className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Accordion</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dropdown"
                className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Dropdown</span>
              </Link>
            </li>
            <li>
              <Link
                to="/tooltip"
                className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">Tooltip</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div className="sm:ml-64 md:py-8 p-4 md:px-24">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
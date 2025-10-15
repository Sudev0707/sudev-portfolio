import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  MessageCircle,
  Info,
  Phone,
  Sun,
  Moon,
  BriefcaseBusiness,
} from "lucide-react";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = ({}) => {
  const [time, setTime] = useState(new Date());
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  // clock
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setShow(false);
      else setShow(true);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // toggle dark/light mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      <div className="flex items-center  justify-between dark:bg-neutral-900 text-black dark:text-white px-6 py-3 ">
        <div
          className={`flex items-center gap-4 font-semibold text-sm  ${
            darkMode ? "text-white " : "text-black "
          }`}
        >
          Asia/Kolkata
        </div>

        {/* Center: Navigation */}
        <div
          className={`flex gap-1.5 items-center p-1 rounded-4xl transition-colors transition-shadow duration-300 border nav_Menu ${
            darkMode
              ? "bg-gray-900 border-gray-700 shadow-2xl"
              : "bg-gray-100 border-gray-200 shadow-xl"
          }`}
        >
          <Link
            to="/"
            className={`flex items-center gap-2 px-4 py-2.5 rounded-4xl transition-all duration-300  ${
              isActive("/")
                ? darkMode
                  ? "bg-gray-700 text-white"
                  : "bg-gray-300 text-black"
                : darkMode
                ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                : "text-gray-700 hover:bg-gray-200 hover:text-black"
            }`}
          >
            <Home className="w-4 h-4" />
          </Link>

          <div className="Nav_Links_Seperator h-7"></div>

          <Link
            to="/portfolio"
            className={`flex items-center gap-2 px-4 py-2  rounded-4xl transition-all duration-300 Nav_Links ${
              isActive("/portfolio")
                ? darkMode
                  ? "bg-gray-700 text-white"
                  : "bg-gray-300 text-black"
                : darkMode
                ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                : "text-gray-700 hover:bg-gray-200 hover:text-black"
            }`}
          >
            <BriefcaseBusiness className="w-4 h-4" /> Portfolio
          </Link>

          <Link
            to="/messages"
            className={`flex items-center gap-2 px-4 py-2 rounded-4xl transition-all duration-300 Nav_Links ${
              isActive("/messages")
                ? darkMode
                  ? "bg-gray-700 text-white"
                  : "bg-gray-300 text-black"
                : darkMode
                ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                : "text-gray-700 hover:bg-gray-200 hover:text-black"
            }`}
          >
            <MessageCircle className="w-4 h-4" /> Messages
          </Link>

          <Link
            to="/about"
            className={`flex items-center gap-2 px-4 py-2 rounded-4xl transition-all duration-300 Nav_Links ${
              isActive("/about")
                ? darkMode
                  ? "bg-gray-700 text-white"
                  : "bg-gray-300 text-black"
                : darkMode
                ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                : "text-gray-700 hover:bg-gray-200 hover:text-black"
            }`}
          >
            <Info className="w-4 h-4" /> About
          </Link>

          <div className="Nav_Links_Seperator h-7"></div>

          <button
            onClick={toggleDarkMode}
            className={`px-4 py-2.5 rounded-full transition-colors duration-300 ${
              darkMode
                ? " hover:bg-gray-600 text-yellow-300"
                : " hover:bg-gray-300 text-gray-700"
            }`}
          >
            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>

        <div
          className={`flex items-center gap-4  ${
            darkMode ? "text-white " : "text-black "
          }`}
        >
          <div className="text-sm font-medium ${darkMode} ">
            {time.toLocaleTimeString()}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

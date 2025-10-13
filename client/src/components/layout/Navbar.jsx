import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [time, setTime] = useState(new Date());
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(false); // dark/light mode

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
    <nav className={`navbar ${show ? "show" : "hide"}`}>
      <div className="navbar-left">
        <h2 className="logo">MyLogo</h2>
      </div>

      <div className="navbar-center">
        <ul className="menu">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <li>
            <button className="mode-btn" onClick={toggleDarkMode}>
              {darkMode ? "Light" : "Dark"}
            </button>
          </li>
        </ul>
      </div>

      <div className="navbar-right">{time.toLocaleTimeString()}</div>
    </nav>
  );
};

export default Navbar;

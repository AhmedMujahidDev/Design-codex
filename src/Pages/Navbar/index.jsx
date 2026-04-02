import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    navigate('/'); // Go to home page
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar flex justify-between items-center px-1 h-24 text-white fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black shadow-lg" : "bg-transparent"}`}>
      <div className="flex items-center justify-start p-1 logo">
        <img src={logo} alt="logo" className="w-auto h-36" />
      </div>

      <ul className={`nav-link list-none flex justify-center space-x-9 font-semibold flex-grow ${isOpen ? "flex flex-col absolute bg-black w-45 h-[80vh] top-19 right-0 z-10 px-5 space-y-10" : "hidden md:flex"}`}>
        {["home", "about", "team", "services", "portfolio", "contact"].map((section) => (
          <li key={section} className={`${isOpen ? "block" : "hidden"} lg:block`}>
            <button
              onClick={() => handleNavClick(section)}
              className="text-base text-white transition-colors hover:text-[#7093c5]"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}

        <li className={`${isOpen ? "block" : "hidden"} lg:block`}>
          {/* <Link
            to="/Academy"
            className="text-base text-white transition-colors hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            Academy
          </Link> */}
        </li>
      </ul>

      <button onClick={() => handleNavClick("contact")} className="hidden md:inline-block w-full sm:w-auto mt-2 sm:ml-4 mr-4">
        <span className="bg-blue-500 hover:bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 cursor-pointer rounded-lg text-base lg:text-lg font-semibold shadow-lg transition w-full sm:w-auto">
          Get Started
        </span>
      </button>

      <div className="text-xl text-white cursor-pointer icon md:hidden mr-4" onClick={toggleMenu}>
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthuProvider.jsx";
import logo from "../icons/Tamil.png";

const Filesbar = () => {
  const { isLoggedIn, user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handledropdown = () => {
    setDropdownOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // Optionally, implement search logic here
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden"; // Update to previous state
  };

  return (
    <>
      <header className="flex shadow-md py-1 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center justify-between gap-5 w-full">
          <div className="max-lg:hidden lg:block">
            <ul className="lg:flex gap-x-10">
              <img src={logo} alt="logo" className="w-14" />
              <li className="mt-4">
                <Link
                  className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                  to="/Homeappliances"
                >
                  Home Appliances
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                  to="/Technologys"
                >
                  Technologies
                </Link>
              </li>
              <li className="mt-4">
                <Link
                  className="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                  to="/Stationary"
                >
                  Stationaries
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center max-lg:ml-auto space-x-3 w-full lg:w-auto">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="border border-gray-300 rounded-full py-2 px-4 w-full lg:w-48 focus:outline-none focus:ring focus:ring-blue-500"
            />

            {isLoggedIn ? (
              <div className="relative">
                <button
                  className="flex items-center rounded-full text-[#333] text-sm  outline-none"
                  onClick={toggleDropdown}
                >
                  <img
                    src="https://i.pinimg.com/564x/1a/fc/cb/1afccbde8dc9be5551b3a1ab9be7d332.jpg"
                    className="w-9 h-9 mr-3 rounded-full shrink-0"
                    alt="User Avatar"
                  />
                  <span>{user ? user.name : "User"}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 fill-gray-400 inline ml-3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute top-16 block shadow-lg bg-white z-[1000] min-w-28 w-max rounded-lg max-h-96 overflow-auto">
                    {user && user.role === "admin" && (
                      <>
                        {" "}
                        <Link
                          className="py-2.5 px-5 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer"
                          to="/Profile"
                          onClick={handledropdown}
                        >
                          Profile
                        </Link>
                        <Link
                          className="py-2.5 px-5 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer"
                          to="/admin"
                          onClick={handledropdown}
                        >
                          Admin Panel
                        </Link>
                        <Link
                          className="py-2.5 px-5 flex items-center hover:bg-gray-100 text-[#333] text-sm cursor-pointer"
                          to="/cart"
                          onClick={handledropdown}
                        >
                          Cart
                        </Link>
                      </>
                    )}
                    <div
                      className="py-2.5 px-5 hover:bg-gray-100 text-[#333] text-sm cursor-pointer"
                      onClick={handleLogout}
                    >
                      Logout
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/Login"
                  className="border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100 transition-all duration-300 ease-in-out"
                >
                  Login
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Responsive Menu */}
          {isMenuOpen && (
            <div className="fixed top-0 left-0 bg-white w-full h-full shadow-lg z-50 p-4 overflow-y-auto">
              <ul className="flex flex-col">
                <li className="py-2">
                  <Link to="/" onClick={toggleMenu}>
                    Home
                  </Link>
                </li>
                <li className="py-2">
                  <Link to="/Homeappliances" onClick={toggleMenu}>
                    Home Appliances
                  </Link>
                </li>
                <li className="py-2">
                  <Link to="/Technologys" onClick={toggleMenu}>
                    Technologies
                  </Link>
                </li>
                <li className="py-2">
                  <Link to="/Stationary" onClick={toggleMenu}>
                    Stationaries
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Filesbar;
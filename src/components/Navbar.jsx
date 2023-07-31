import React, { useState, useEffect } from "react";
import Log from "../assets/logo1.png";
import Dropdown from "./Dropdown";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ authenticated, handleSignOut, useremail, username }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [imageUrlObject, setImageUrlObject] = useState(null); // New state variable to store the image URL
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignOutClick = () => {
    handleSignOut(); // Call the handleSignOut function passed as a prop
    navigate("/login"); // Navigate to the login page after signing out
  };
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const hexColors = [
    "ff5733",
    "3c91e6",
    "33ff86",
    "ffc233",
    "be33ff",
    "33ffe8",
    "ff33ae",
    "b333ff",
    "33ffbe",
    "e833ff",
  ];

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const randomIndex = getRandomInt(0, hexColors.length - 1);
  const randomHexColor = hexColors[randomIndex];

  //avatar-g88m.onrender.com/generate-image?name=Praveen&color=3D85E6
  const imageUrl1 = `http://avatar-g88m.onrender.com/generate-image?name=${username}&color=${randomHexColor}`;

  useEffect(() => {
    setImageUrlObject(imageUrl1);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-50 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img
            src={Log}
            className="h-10 mr-3 rounded-full"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            BestFit
          </span>
        </Link>

        <div className="flex md:order-2">
          {imageUrlObject && (
            <div className="relative inline-block text-left">
              <button
                id="dropdownDefaultButton"
                onClick={handleDropdownToggle}
                className="text-white hover:bg-blue-200 font-medium rounded-full text-sm px-2 py-2 text-center inline-flex items-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                {/* <img src={imageUrlObject} className="w-10 h-10" alt="" /> */}
                <img
                  src={imageUrl1}
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
              </button>
              {isDropdownOpen && (
                <div
                  id="dropdown"
                  className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 bg-blue-100 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <Link
                        to="/"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {username}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white overflow-hidden"
                      >
                        {useremail}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Account Settings
                      </Link>
                    </li>
                    {authenticated ? (
                      <li>
                        <button
                          onClick={handleSignOutClick}
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Sign Out
                        </button>
                      </li>
                    ) : (
                      <li>
                        <Link
                          to="/login"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Sign In
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          )}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/dashboard"
                className="cursor-pointer block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Category
              </Link>
            </li>
            <li>
              <Link
                to="/order"
                className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Orders
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import { useEffect } from "react";
import React, { useState } from "react";
import Log from "../assets/logo1.png";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useNavigate } from "react-router-dom";

const Base_url = "https://tailorapp.azurewebsites.net";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!user) return; // Check if user is null
        const response = await fetch(`${Base_url}/user/${user.sub}`);

        const responseData = await response.json(); // Parse JSON response
        if (response.ok) {
          setUserData(responseData);
          console.log(responseData);
        } else {
          console.error("Failed to fetch user data:", responseData.error);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (isAuthenticated && user && !isLoading && !userData) {
      fetchUserData();
    }
  }, [isAuthenticated, user, isLoading, userData]);
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
          <div className="relative inline-block text-left">
            <button
              id="dropdownDefaultButton"
              onClick={handleDropdownToggle}
              className="text-white hover:bg-blue-200 font-medium rounded-full text-sm px-2 py-2 text-center inline-flex items-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              <img
                src={user.picture}
                alt={user.name}
                className="w-10 h-10 rounded-full"
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
                      {userData ? userData.username : user.nickname}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white overflow-hidden"
                    >
                      {userData ? userData.email : user.email}
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
                  {isAuthenticated ? (
                    <li>
                      <button
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() =>
                          logout({
                            logoutParams: {
                              returnTo: window.location.origin,
                            },
                          })
                        }
                      >
                        Log Out
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

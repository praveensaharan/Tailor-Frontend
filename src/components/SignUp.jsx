import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Log from "../assets/logo1.png";

const Base_url = "https://bestfitbackend.onrender.com";

function Signup() {
  // const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    gender: "",
    phoneNumber: "",
    password: "",

    confirmPassword: "",
  });
  const [redirectTo, setRedirectTo] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Password does not match");
    } else {
      try {
        const response = await fetch(`${Base_url}/signup`, {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          const errorData = await response.text();
          console.error("Error saving data:", errorData);
          return;
        }

        const data = await response.json();
        console.warn(data);
        alert("Data saved successfully");
        setRedirectTo(true);
      } catch (error) {
        console.error("Error saving data:", error);
      }
    }
  };

  // Function to update form data state on input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  if (redirectTo) {
    return <Navigate to="/" />;
  }

  return (
    <div className="h-full bg-gradient-to-tl from-blue-50 to-blue-700 w-full py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <img src={Log} className="h-16 mr-3 rounded-full" alt="Flowbite Logo" />
        <p className="self-center text-2xl font-semibold whitespace-nowrap text-white">
          BestFit
        </p>
        <div className="bg-white shadow rounded-3xl lg:w-1/3 md:w-1/2 w-full p-10 mt-6">
          <p
            tabIndex={0}
            role="heading"
            aria-label="Register your account"
            className="text-2xl font-extrabold leading-6 text-gray-800"
          >
            Register your account
          </p>
          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="text-sm font-medium leading-none text-gray-800">
                Name
              </label>
              <input
                aria-label="enter name"
                role="input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="required:border-red-500 bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium leading-none text-gray-800">
                Email
              </label>
              <input
                aria-label="enter email address"
                role="input"
                type="email"
                name="email" // Add the 'name' attribute for the email field
                value={formData.email} // Bind the input value to the state
                onChange={handleChange} // Bind the 'onChange' event to update the state
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium leading-none text-gray-800">
                username
              </label>
              <input
                aria-label="enter username"
                role="input"
                type="text"
                name="username" // Add the 'name' attribute for the email field
                value={formData.username} // Bind the input value to the state
                onChange={handleChange} // Bind the 'onChange' event to update the state
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium leading-none text-gray-800">
                Gender
              </label>
              <select
                aria-label="select gender"
                role="select"
                name="gender" // Add the 'name' attribute for the gender field
                value={formData.gender} // Bind the selected value to the state
                onChange={handleChange} // Bind the 'onChange' event to update the state
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                required
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium leading-none text-gray-800">
                Phone Number
              </label>
              <input
                aria-label="enter phone number"
                role="input"
                type="tel"
                name="phoneNumber" // Add the 'name' attribute for the phone number field
                value={formData.phoneNumber} // Bind the input value to the state
                onChange={handleChange} // Bind the 'onChange' event to update the state
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium leading-none text-gray-800">
                Password
              </label>
              <input
                aria-label="enter password"
                role="input"
                type="password"
                name="password" // Add the 'name' attribute for the password field
                value={formData.password} // Bind the input value to the state
                onChange={handleChange} // Bind the 'onChange' event to update the state
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium leading-none text-gray-800">
                Re-enter Password
              </label>
              <input
                aria-label="re-enter password"
                role="input"
                type="password"
                name="confirmPassword" // Add the 'name' attribute for the confirm password field
                value={formData.confirmPassword} // Bind the input value to the state
                onChange={handleChange} // Bind the 'onChange' event to update the state
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                required
              />
            </div>
            <div className="mt-6 w-full">
              <button
                role="button"
                aria-label="create my account"
                type="submit"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;

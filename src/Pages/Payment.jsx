import { useEffect } from "react";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Form from "../components/Payment1";
import { useAuth0 } from "@auth0/auth0-react";
const port = "https://bestfitbackend.onrender.com";
const Payment = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!user) return; // Check if user is null
        const response = await fetch(`${port}/user/${user.sub}`);
        const responseData = await response.json(); // Parse JSON response
        if (response.ok) {
          setUserData(responseData);
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

  return (
    <>
      <Navbar />

      {userData && <Form userid={userData._id} />}
    </>
  );
};
export default Payment;

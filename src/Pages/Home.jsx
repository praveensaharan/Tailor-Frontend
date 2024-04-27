import { useEffect } from "react";
import React, { useState } from "react";
import Navbar from "../components1/Navbar";
import CTA from "../components1/CTA";
import Feature1 from "../components1/Feature1";
import Feature2 from "../components1/Feature2";
import TeamSection from "../components1/TeamSection";
import Newsletter from "../components1/Newsletter";
import Tailor from "../components1/Tailor";
import Header2 from "../components1/Header2";
import Footer from "../components1/Footer";

const port = "https://tailorapp.azurewebsites.net";
const Home = () => {
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${port}/`);

        if (response.ok) {
          console.log(response);
        } else {
          console.error("Failed to fetch user data:", response.error);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <>
      <Navbar />

      <Header2 />

      <Feature1 />
      <Feature2 />
      <Tailor />
      <CTA />
      <TeamSection />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;

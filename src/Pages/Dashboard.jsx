import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Dashboard = ({ authenticated, handleSignOut, useremail, username }) => {
  return (
    <>
      <Navbar
        authenticated={authenticated}
        handleSignOut={handleSignOut}
        useremail={useremail}
        username={username}
      />
      <Header />
    </>
  );
};

export default Dashboard;

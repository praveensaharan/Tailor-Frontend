import React from "react";
import Tailor from "../components/Tailor";
import Navbar from "../components/Navbar";

const Tailors = ({ authenticated, handleSignOut, useremail, username }) => {
  return (
    <>
      <Navbar
        authenticated={authenticated}
        handleSignOut={handleSignOut}
        useremail={useremail}
        username={username}
      />
      <Tailor />
    </>
  );
};
export default Tailors;

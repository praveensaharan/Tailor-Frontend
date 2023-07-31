import React from "react";
import Navbar from "../components/Navbar";
import Form from "../components/PaymentFAil";

const Fail = ({ authenticated, handleSignOut, useremail, username }) => {
  return (
    <>
      <Navbar
        authenticated={authenticated}
        handleSignOut={handleSignOut}
        useremail={useremail}
        username={username}
      />

      <Form />
    </>
  );
};
export default Fail;

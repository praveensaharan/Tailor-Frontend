import React from "react";
import Navbar from "../components/Navbar";
import Form from "../components/Payment1";

const Payment = ({
  authenticated,
  handleSignOut,
  useremail,
  username,
  userid,
}) => {
  return (
    <>
      <Navbar
        authenticated={authenticated}
        handleSignOut={handleSignOut}
        useremail={useremail}
        username={username}
      />

      <Form userid={userid} />
    </>
  );
};
export default Payment;

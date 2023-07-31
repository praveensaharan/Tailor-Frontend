import React from "react";
import Navbar from "../components/Navbar";
import Form from "../components/Orders";

const Orders = ({
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
export default Orders;

import React from "react";
import Navbar from "../components/Navbar";
import Form from "../components/Product";

const Product2 = ({ authenticated, handleSignOut, useremail, username }) => {
  return (
    <>
      <Navbar
        authenticated={authenticated}
        handleSignOut={handleSignOut}
        useremail={useremail}
        username={username}
      />

      <Form username={username} />
    </>
  );
};
export default Product2;

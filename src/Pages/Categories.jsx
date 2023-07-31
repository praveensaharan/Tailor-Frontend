import React from "react";
import Categori from "../components/category";
import Navbar from "../components/Navbar";

const Categories = ({ authenticated, handleSignOut, useremail, username }) => {
  return (
    <>
      <Navbar
        authenticated={authenticated}
        handleSignOut={handleSignOut}
        useremail={useremail}
        username={username}
      />
      <Categori />
    </>
  );
};
export default Categories;

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Signup from "./Pages/Signup";
import Category from "./Pages/Categories";
import ErrorPage from "./error";
import Login from "./Pages/Login";
import Tailor from "./Pages/Tailors";
import Product from "./Pages/Product";
import Order from "./Pages/Order";
import Payment from "./Pages/Payment";
import Successful from "./Pages/Successful";
import Failed from "./Pages/Failed";

const Base_url = "http://localhost:5000";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [useremail, setUseremail] = useState("");
  const [username, setUsername] = useState("");
  const [userid, setUserid] = useState("");

  const authenticateUser = async (username, password) => {
    try {
      const response = await fetch(`${Base_url}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      });

      if (response.status === 200) {
        const userData = await response.json();
        // Get the response data
        const { name, email, _id } = userData;
        // Extract username and email from the data
        setAuthenticated(true);
        setUserid(_id);
        setUsername(name); // Set the username state
        setUseremail(email);

        // Set the useremail state
        return true;
      } else {
        const data = await response.json();
        if (data && data.message) {
          alert(data.message);
        } else {
          alert("Unknown error occurred. Please try again.");
        }
      }
    } catch (error) {
      alert(error.message || "An error occurred. Please try again later.");
      console.error("Error signing in:", error);
    }
    return false;
  };

  const handleSignOut = () => {
    setAuthenticated(false);
    setUseremail("");
    setUsername("");
    setUserid("");
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            authenticated ? (
              <Dashboard
                authenticated={authenticated}
                handleSignOut={handleSignOut}
                useremail={useremail}
                username={username}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/dashboard"
          element={
            authenticated ? (
              <Dashboard
                authenticated={authenticated}
                handleSignOut={handleSignOut}
                useremail={useremail}
                username={username}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/login"
          element={
            authenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login authenticateUser={authenticateUser} />
            )
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/tailors"
          element={
            <Tailor
              authenticated={authenticated}
              handleSignOut={handleSignOut}
              useremail={useremail}
              username={username}
            />
          }
        />
        <Route
          path="/tailors/:id"
          element={
            <Product
              authenticated={authenticated}
              handleSignOut={handleSignOut}
              useremail={useremail}
              username={username}
            />
          }
        />
        <Route
          path="/order"
          element={
            <Order
              authenticated={authenticated}
              handleSignOut={handleSignOut}
              useremail={useremail}
              username={username}
              userid={userid}
            />
          }
        />
        <Route
          path="/payment"
          element={
            <Payment
              authenticated={authenticated}
              handleSignOut={handleSignOut}
              useremail={useremail}
              username={username}
              userid={userid}
            />
          }
        />

        <Route
          path="/categories"
          element={
            <Category
              authenticated={authenticated}
              handleSignOut={handleSignOut}
              useremail={useremail}
              username={username}
            />
          }
        />
        <Route
          path="/paymentSuccessful"
          element={
            <Successful
              authenticated={authenticated}
              handleSignOut={handleSignOut}
              useremail={useremail}
              username={username}
            />
          }
        />
        <Route
          path="/paymentFailed"
          element={
            <Failed
              authenticated={authenticated}
              handleSignOut={handleSignOut}
              useremail={useremail}
              username={username}
            />
          }
        />
        <Route
          path="*"
          element={
            <ErrorPage
              authenticated={authenticated}
              handleSignOut={handleSignOut}
              useremail={useremail}
              username={username}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

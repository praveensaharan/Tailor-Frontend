import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate, // Add Navigate import
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Dashboard from "./Pages/Dashboard";
import Signup from "./Pages/Signup";
import Category from "./Pages/Categories";
import ErrorPage from "./error";
// import Login from "./Pages/Login";
import Tailor from "./Pages/Tailors";
import Product from "./Pages/Product";
import Order from "./Pages/Order";
import Payment from "./Pages/Payment";
import Successful from "./Pages/Successful";
import Failed from "./Pages/Failed";
import Home from "./Pages/Home";

const Base_url = "https://bestfitbackend.onrender.com";

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    // Handle loading state if necessary
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />

        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />

        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <Home />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tailors" element={<Tailor />} />
        <Route path="/tailors/:id" element={<Product />} />
        <Route
          path="/order"
          element={isAuthenticated ? <Order /> : <Navigate to="/login" />}
        />
        <Route path="/payment" element={<Payment />} />

        <Route
          path="/categories"
          element={isAuthenticated ? <Category /> : <Navigate to="/login" />}
        />
        <Route path="/paymentSuccessful" element={<Successful />} />
        <Route path="/paymentFailed" element={<Failed />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;

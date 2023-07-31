import React, { useState, useEffect } from "react";
import Delete from "../assets/delete.png";
import { Navigate } from "react-router-dom";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./utils";
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { useLocation } from "react-router-dom";
const Base_url = "https://bestfitbackend.onrender.com";

const App = ({ userid }) => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiry: "",
    cvc: "",
    fullName: "",
    fullNameOrder: "",
    mobile: "",
    email: "",
    address: "",
    city: "Mumbai",
    zip: "",
    focused: "",
  });
  const location = useLocation();
  const [redirectTo, setRedirectTo] = useState(false);
  const [redirectTo1, setRedirectTo1] = useState(false);
  const queryParams = new URLSearchParams(location.search);
  const totalPrice = queryParams.get("totalPrice");
  const product = queryParams.get("product");
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
      focused: name === "cvc" ? "cvc" : formData.focused,
    });
  };
  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      orderPrice: totalPrice,
    }));
  }, [totalPrice]);

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      item: product,
    }));
  }, [product]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    try {
      // Remove the userid from the URL and add it to the request body instead

      const response = await fetch(`${Base_url}/create-order/${userid}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (formData.cardNumber === "4242424242424242") {
        console.log("Payment successful!");
        setRedirectTo(true);
      } else {
        setRedirectTo1(true);
      }

      setFormData((prevFormData) => ({
        ...prevFormData,
        cardNumber: "",
        expiry: "",
        cvc: "",
        fullName: "",
        fullNameOrder: "",
        mobile: "",
        email: "",
        address: "",
        city: "Mumbai",
        zip: "",
        focused: "",
      }));

      // Do something with the response data if needed
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleInputFocus = ({ target }) => {
    setFormData({ ...formData, focused: target.name });
  };
  const [showPaymentCard, setShowPaymentCard] = useState(true);

  const handleRemoveCard = () => {
    setShowPaymentCard(false);
  };
  if (redirectTo) {
    return <Navigate to="/paymentSuccessful" />;
  }
  if (redirectTo1) {
    return <Navigate to="/paymentFailed" />;
  }
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-blue-50 mt-24">
      {showPaymentCard && (
        <div className="relative m-4 p-4 lg:mr-28 bg-green-100 rounded-lg shadow-md">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
            onClick={handleRemoveCard}
          >
            <img src={Delete} className="w-7" alt="" srcset="" />
          </button>

          <p className="flex justify-center items-center">
            To complete the payment, use the following card details: <br />
            Card No: 4242 4242 4242 4242 <br />
            Expiry: Any future date <br />
            CVC: Any three-digit number
          </p>
          <p className="flex justify-center items-center">
            <a
              href="https://buy.stripe.com/test_8wM3fkfI84DDbC0cMO"
              className="mt-2 border border-transparent hover:border-gray-300 bg-red-700 hover:bg-red-400 text-white hover:text-gray-900 flex justify-center items-center py-2 rounded-xl w-2/5"
            >
              For Real Pay
            </a>
          </p>
        </div>
      )}
      <div className="px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container relative">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-start items-start w-full space-y-9"
        >
          <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full mb-16">
            <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-4/5 rounded-lg shadow-md">
              <div className="flex flex-row justify-center items-center">
                <hr className="border w-full" />
              </div>

              <label className="mt-8 text-base leading-4 text-gray-800">
                Card details
              </label>
              <div className="mt-2 flex-col">
                <Card
                  number={formData.cardNumber}
                  name={formData.fullName}
                  expiry={formData.expiry}
                  cvc={formData.cvc}
                  focused={formData.focused}
                />
                <div className="mt-2">
                  <input
                    className="border rounded-xl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="number"
                    name="cardNumber"
                    placeholder="0000 1234 6549 15151"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <input
                    className="border rounded-xl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="flex-row flex">
                  <input
                    className="border rounded-xl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="text"
                    name="expiry"
                    placeholder="MM/YY"
                    value={formData.expiry}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    className="border rounded-xl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="text"
                    name="cvc"
                    placeholder="CVC"
                    value={formData.cvc}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    required
                  />
                </div>
              </div>

              <label className="mt-8 text-base leading-4 text-gray-800">
                Name (Order details)
              </label>
              <div className="mt-2 flex-col">
                <div>
                  <input
                    className="border rounded-xl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="text"
                    name="fullNameOrder"
                    placeholder="Full Name"
                    value={formData.fullNameOrder}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <input
                    className="border rounded-xl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="tel"
                    name="mobile"
                    placeholder="Mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="">
                  <input
                    className="border border-gray-300 p-4 rounded-xl w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <label className="mt-8 text-base leading-4 text-gray-800">
                Pickup Address
              </label>
              <div className="mt-2 flex-col">
                <input
                  className="border rounded-xl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="text"
                  name="address"
                  placeholder="Full Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />

                <div className="">
                  <p className="border bg-white cursor-not-allowed border-gray-300 p-4 rounded-xl w-full text-base leading-4 placeholder-gray-600 text-gray-600">
                    Mumbai
                  </p>
                </div>
                <input
                  className="border rounded-xl   rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="text"
                  name="zip"
                  placeholder="ZIP"
                  value={formData.zip}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button className="mt-8 border border-transparent hover:border-gray-300 bg-blue-700 hover:bg-blue-400 text-white hover:text-gray-900 flex justify-center items-center py-4 rounded-xl w-full">
                <div>
                  <p className="text-base leading-4">Pay ₹{totalPrice}</p>
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;

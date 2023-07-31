// const dummyTailors = [
//   {
//     tailorname: "Tailor Studio",
//     rating: 4.9,
//     verified: true,
//     image: "https://dummyimage.com/300x200",
//     price: "₹800",
//     address: "123 Fashion Avenue, City X",
//     email: "tailorstudio@example.com",
//     phoneno: "555-123-4567",
//   },
// ];
import React, { useState } from "react";
import star from "../assets/star.png";
import verfi from "../assets/check-mark.png";
import { Link } from "react-router-dom";
const Price = ({ dummyTailors }) => {
  const [value, setValue] = useState(1);
  const [fitOption, setFitOption] = useState("fitPick"); // Fit options: "fitAdd" or "fitPick"
  const [deliveryOption, setDeliveryOption] = useState("deliveryRegular"); // Delivery options: "deliveryRegular" or "deliveryFast"
  const [washOption, setWashOption] = useState("washWithout"); // Wash options: "washBefore" or "washWithout"
  const [ironOption, setIronOption] = useState("ironExpert"); // Iron options: "ironExpert" or "ironWithout"
  const optionPrices = {
    fit: {
      fitAdd: 0.0,
      fitPick: 40.0,
    },
    delivery: {
      deliveryRegular: 0.0,
      deliveryFast: 20.0,
    },
    wash: {
      washBefore: 10.0,
      washWithout: 0.0,
    },
    iron: {
      ironExpert: 10.0,
      ironWithout: 0.0,
    },
  };
  const decrement = () => {
    setValue((prevValue) => Math.max(prevValue - 1, 1));
  };

  const increment = () => {
    setValue((prevValue) => prevValue + 1);
  };
  const handleFitOptionChange = (e) => {
    if (e.target.value === "fitAdd") {
      return; // Early return, so the option is not set
    }
    setFitOption(e.target.value);
  };

  const handleDeliveryOptionChange = (e) => {
    setDeliveryOption(e.target.value);
  };

  const handleWashOptionChange = (e) => {
    setWashOption(e.target.value);
  };

  const handleIronOptionChange = (e) => {
    setIronOption(e.target.value);
  };
  const itemPrice = dummyTailors.price;
  const totalPrice = (
    itemPrice * value +
    optionPrices.fit[fitOption] +
    optionPrices.delivery[deliveryOption] * value +
    optionPrices.wash[washOption] * value +
    optionPrices.iron[ironOption] * value
  ).toFixed(2);

  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:flex lg:w-5/6 mx-auto flex-wrap">
        <div className="lg:w-1/2 w-full lg:h-96 h-64 object-cover object-center rounded flex flex-col items-end justify-end">
          <img
            alt="ecommerce"
            className="w-full lg:h-96 h-64 object-cover object-center rounded pb-3 pt-8"
            src={dummyTailors.image}
          />
          <div className="custom-number-input h-10 w-32 flex items-end justify-end ">
            <label
              htmlFor="custom-input-number"
              className="w-full text-gray-700 text-sm font-semibold "
            >
              <p className="leading-relaxed pb-3 pr-2">Items:</p>
            </label>
            <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1 justify-end">
              <button
                data-action="decrement"
                onClick={decrement}
                className="bg-blue-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
              >
                <span className="m-auto text-2xl font-bold">−</span>
              </button>
              <input
                type="number"
                className="focus:outline-none text-center w-full bg-white font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700 outline-none"
                name="custom-input-number"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
              />
              <button
                data-action="increment"
                onClick={increment}
                className="bg-blue-700 text-white hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
              >
                <span className="m-auto text-2xl font-bold">+</span>
              </button>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-xs italic title-font text-gray-500 tracking-widest">
            Best Quality Tailored Clothes
          </h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
            {dummyTailors.name}
          </h1>
          <div className="flex mb-4">
            <div class="flex-1 flex items-start justify-start space-x-2">
              <img src={star} class="w-5" alt="verified" />
              <div className="p-1 bg-gray-300 text-black text-xs font-bold rounded">
                {dummyTailors.rating}
              </div>
            </div>
            {dummyTailors.verified ? (
              <div className="flex-1 flex items-end justify-end">
                <img src={verfi} className="w-6" alt="verified" />
                <div className="p-1 bg-gray-800 text-white text-xs font-bold rounded">
                  Verified
                </div>
              </div>
            ) : (
              <div className="flex-1 flex items-end justify-end"></div>
            )}
          </div>

          <p className="leading-relaxed mt-10">
            For Custom Design:
            <a
              className="ml-5 bg-slate-300 rounded-md p-2 cursor-not-allowed"
              href=""
            >
              In Progress
            </a>
          </p>
          <div className="flex items-center mt-5">
            <span className="leading-relaxed mt-10"></span>
            Fit:
            <ul className="grid grid-cols-2 gap-full text-sm font-medium text-gray-900 p-3 rounded-lg">
              <li
                className={`border border-gray-200 rounded-xl mr-2 ${
                  fitOption === "fitAdd"
                    ? "bg-blue-700 text-white"
                    : "bg-blue-100"
                }`}
              >
                <div className="flex items-center justify-center h-full">
                  <input
                    id="fitAdd"
                    type="radio"
                    value="fitAdd"
                    name="fitOption"
                    checked={fitOption === "fitAdd"}
                    onChange={handleFitOptionChange}
                    className="sr-only cursor-pointer"
                    disabled
                  />
                  <label
                    htmlFor="fitAdd"
                    className="w-full text-center justify-center cursor-not-allowed"
                  >
                    Add Your Fit (₹+0)
                  </label>
                </div>
              </li>

              <li
                className={`border border-gray-200 rounded-xl ${
                  fitOption === "fitPick"
                    ? "bg-blue-700 text-white"
                    : "bg-blue-100"
                }`}
              >
                <div className="flex items-center pl-2">
                  <input
                    id="fitPick"
                    type="radio"
                    value="fitPick"
                    name="fitOption"
                    checked={fitOption === "fitPick"}
                    onChange={handleFitOptionChange}
                    className="sr-only" // Hide the default radio appearance
                  />
                  <label
                    htmlFor="fitPick"
                    className="w-full py-3 m-1 cursor-pointer"
                  >
                    For Expert Fit Use our PickFit (&#x20B9;+40)
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex items-center mt-5">
            <span className="leading-relaxed mt-10"> </span>
            Delivery:
            <ul className="grid grid-cols-2 gap-full text-sm font-medium text-gray-900 p-3 rounded-lg">
              <li
                className={`border border-gray-200 rounded-xl mr-2 p-3 ${
                  deliveryOption === "deliveryRegular"
                    ? "bg-blue-700 text-white"
                    : "bg-blue-100"
                }`}
              >
                <div className="flex items-center justify-center h-full">
                  <input
                    id="deliveryRegular"
                    type="radio"
                    value="deliveryRegular"
                    name="deliveryOption"
                    checked={deliveryOption === "deliveryRegular"}
                    onChange={handleDeliveryOptionChange}
                    className="sr-only cursor-pointer"
                  />
                  <label
                    htmlFor="deliveryRegular"
                    className="w-full text-center justify-center cursor-pointer"
                  >
                    Regular Delivery (&#x20B9;+0)
                  </label>
                </div>
              </li>
              <li
                className={`border border-gray-200 rounded-xl ${
                  deliveryOption === "deliveryFast"
                    ? "bg-blue-700 text-white"
                    : "bg-blue-100"
                }`}
              >
                <div className="flex items-center pl-2">
                  <input
                    id="deliveryFast"
                    type="radio"
                    value="deliveryFast"
                    name="deliveryOption"
                    checked={deliveryOption === "deliveryFast"}
                    onChange={handleDeliveryOptionChange}
                    className="sr-only" // Hide the default radio appearance
                  />
                  <label
                    htmlFor="deliveryFast"
                    className="w-full py-3 m-1 cursor-pointer"
                  >
                    Fast Delivery (₹+20)
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex items-center mt-5">
            <span className="leading-relaxed mt-10"> </span>
            Wash:
            <ul className="grid grid-cols-2 gap-full text-sm font-medium text-gray-900 p-3 rounded-lg">
              <li
                className={`border border-gray-200 rounded-xl mr-2 ${
                  washOption === "washBefore"
                    ? "bg-blue-700 text-white"
                    : "bg-blue-100"
                }`}
              >
                <div className="flex items-center justify-center h-full">
                  <input
                    id="washBefore"
                    type="radio"
                    value="washBefore"
                    name="washOption"
                    checked={washOption === "washBefore"}
                    onChange={handleWashOptionChange}
                    className="sr-only cursor-pointer"
                  />
                  <label
                    htmlFor="washBefore"
                    className="w-full text-center justify-center cursor-pointer m-1"
                  >
                    Wash Before Tailoring (₹+10)
                  </label>
                </div>
              </li>

              <li
                className={`border border-gray-200 rounded-xl ${
                  washOption === "washWithout"
                    ? "bg-blue-700 text-white"
                    : "bg-blue-100"
                }`}
              >
                <div className="flex items-center pl-2">
                  <input
                    id="washWithout"
                    type="radio"
                    value="washWithout"
                    name="washOption"
                    checked={washOption === "washWithout"}
                    onChange={handleWashOptionChange}
                    className="sr-only" // Hide the default radio appearance
                  />
                  <label
                    htmlFor="washWithout"
                    className="w-full py-3 m-1 cursor-pointer"
                  >
                    Without Wash (&#x20B9;+0)
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex items-center mt-5">
            <span className="leading-relaxed mt-10"> </span>
            Iron:
            <ul className="grid grid-cols-2 gap-full text-sm font-medium text-gray-900 p-3 rounded-lg">
              <li
                className={`border border-gray-200 rounded-xl mr-2 ${
                  ironOption === "ironExpert"
                    ? "bg-blue-700 text-white"
                    : "bg-blue-100"
                }`}
              >
                <div className="flex items-center justify-center h-full">
                  <input
                    id="ironExpert"
                    type="radio"
                    value="ironExpert"
                    name="ironOption"
                    checked={ironOption === "ironExpert"}
                    onChange={handleIronOptionChange}
                    className="sr-only cursor-pointer"
                  />
                  <label
                    htmlFor="ironExpert"
                    className="w-full text-center justify-center cursor-pointer m-1"
                  >
                    Expert Iron (₹+10)
                  </label>
                </div>
              </li>

              <li
                className={`border border-gray-200 rounded-xl ${
                  ironOption === "ironWithout"
                    ? "bg-blue-700 text-white"
                    : "bg-blue-100"
                }`}
              >
                <div className="flex items-center pl-2">
                  <input
                    id="ironWithout"
                    type="radio"
                    value="ironWithout"
                    name="ironOption"
                    checked={ironOption === "ironWithout"}
                    onChange={handleIronOptionChange}
                    className="sr-only" // Hide the default radio appearance
                  />
                  <label
                    htmlFor="ironWithout"
                    className="w-full py-3 m-1 cursor-pointer"
                  >
                    Without Iron (&#x20B9;+0)
                  </label>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex flex-col mt-6 items-center pb-5 border-b-2 border-gray-100"></div>
          <div className="flex">
            <span className="title-font font-medium text-2xl text-gray-900 mt-2">
              &#x20B9;{totalPrice}
            </span>
            <Link
              className="flex ml-auto mt-2 px-6 py-2 text-sm text-green-100 bg-green-600 rounded-lg hover:bg-green-700 cursor-pointer"
              to={`/payment?totalPrice=${totalPrice}&product=${dummyTailors.name}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span>Order Now</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Price;

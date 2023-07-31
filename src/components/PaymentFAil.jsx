import React from "react";
import { Link } from "react-router-dom";

const PaymentFailure = () => {
  return (
    <div className="bg-gray-100 h-screen mt-10">
      <div className="bg-white p-6 md:mx-auto">
        <svg
          viewBox="0 0 24 24"
          className="text-red-600 w-16 h-16 mx-auto my-6"
        >
          <path
            fill="currentColor"
            d="M12,24A12,12,0,1,1,24,12,12.014,12.014,0,0,1,12,24ZM14.121,8.121,12,10.242,9.879,8.121a1,1,0,0,0-1.414,1.414L10.586,12,8.465,14.121a1,1,0,1,0,1.414,1.414L12,13.414l2.121,2.121a1,1,0,1,0,1.414-1.414L13.414,12l2.121-2.121a1,1,0,0,0-1.414-1.414Z"
          ></path>
        </svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Failed
          </h3>
          <p className="text-gray-600 my-2">
            We're sorry, but the payment couldn't be processed at this time.
          </p>
          <p>Please try again later or contact support.</p>
          <div className="py-10 text-center">
            <Link
              to="/"
              className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
            >
              GO BACK
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailure;

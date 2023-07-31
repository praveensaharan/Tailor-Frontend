import React from "react";
import bg from "../assets/bg.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <style>
        {`
    .header {
      background-image: url(${bg});
      background-size: cover;
      background-repeat: no-repeat;
      min-height: 200vh;
    }
    @media (max-width: 768px) {
      .header {
        background-image: none;
        background: linear-gradient(to right, #eedee7,   #fbe1f1
);
      }
    }
  `}
      </style>

      <div className="header sm:bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="flex flex-col md:flex-row mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center dark:bg-slate-500">
          <div className="w-full md:w-1/2 py-8 px-4 text-center"></div>
          <div className="w-full md:w-1/2 py-8 px-4 text-center md:text-left">
            <h1 className="text-3xl font-extrabold bg-gradient-to-r mt-16 mb-8 from-yellow-300 via-red-600 to-yellow-300 bg-clip-text text-transparent sm:text-5xl">
              Discover Your Personalized Style
              <span className="sm:block"> with BestFit Tailors! </span>
            </h1>
            <p className="mt-4 max-w-xl text-xl text-gray-800 dark:text-gray-100 md:pr-10">
              At BestFit Tailors, we believe in celebrating your individuality.
              Your style is an expression of who you are, and our dedicated team
              of tailors in Mumbai is here to bring your fashion dreams to life.
              From personalized designs to precise fittings, we ensure that your
              garments are a true reflection of your personality.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 py-8 px-4 mt-48 text-xl text-center md:pl-48 text-yellow-900">
          Currently serving Mumbai with love, we're on a mission to expand to
          metro cities soon. So if you're from Mumbai, it's time to choose your
          BestFit tailor and experience the magic of a perfect fit, customized
          just for you!
          <div className="ml-auto flex justify-center items-center mt-4">
            <Link
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
              to="/categories"
            >
              Your Tailor
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

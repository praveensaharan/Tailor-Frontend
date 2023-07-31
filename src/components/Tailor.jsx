import React, { useState, useEffect } from "react";
import verfi from "../assets/check-mark.png";
import star from "../assets/star.png";
import { Link } from "react-router-dom";
const Base_url = "http://localhost:5000";

const Section = () => {
  const [dummyData, setDummyData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    fetch(`${Base_url}/tailors`)
      .then((response) => response.json())
      .then((data) => setDummyData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="text-gray-600 body-font mt-10">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Discover Your Perfect Tailor
            </h1>
            <div className="h-1 w-20 bg-yellow-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full text-xl leading-relaxed text-gray-500">
            Explore our curated selection of talented tailors who bring your
            fashion dreams to life. From personalized designs to precise
            fittings, they ensure your garments are a true reflection of your
            personality and style.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Mapping through the dummy data to create cards */}
          {dummyData.map((item, index) => (
            <div className="xl:w-1/4 md:w-1/2 p-4 w-full" key={index}>
              <Link to={`/tailors/${item._id}`}>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={item.image}
                    alt="content"
                  />
                  <div className="flex mb-5">
                    <div className="flex-1 flex items-start justify-start">
                      <img src={star} className="w-5" alt="verified" />
                      <div className="p-1 bg-gray-300 text-yellow-600 text-xs font-bold rounded">
                        {item.rating}
                      </div>
                    </div>
                    <div className="flex-1 flex items-end justify-end">
                      {item.verified && (
                        <>
                          <img src={verfi} className="w-6" alt="verified" />
                          <div className="p-1 bg-gray-800 text-white text-xs font-bold rounded">
                            Verified
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    {item.name}
                  </h2>
                  <p className="leading-relaxed text-xs">{item.address}</p>
                  <div className="flex mt-4">
                    <h3 className="flex-1 text-left tracking-widest text-xs text-red-600 font-bold title-font p-1 bg-gray-300 rounded">
                      {item.priceRange}
                    </h3>
                    <h3 className="flex-1 text-right tracking-widest title-font p-1 bg-gray-800 text-white text-xs font-bold rounded">
                      {item.deliveryTime}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;

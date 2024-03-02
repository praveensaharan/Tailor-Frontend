import React from "react";
import tai1 from "../Assets1/Tailor1.png";
import tai2 from "../Assets1/Tailor2.png";
import tai3 from "../Assets1/Tailor3.png";

export default function Home() {
  return (
    <>
      <div className="xl:mx-auto xl:container 2xl:px-20 px-6 py-20 dark:bg-slate-300">
        <h1 className="text-5xl font-semibold leading-10 text-gray-800 text-center">
          Meet our Tailors
        </h1>
        <div className="flex flex-wrap items-stretch xl:justify-between justify-center mt-16 xl:gap-6 gap-4">
          <div className="lg:w-96 w-80">
            <img
              src={tai1}
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt="woman smiling"
            />
            <div className="bg-white shadow-md rounded-md py-4 text-center">
              <p className="text-base font-medium leading-6 text-gray-600">
                Krishna Shiva
              </p>
              <p className="text-base leading-6 mt-2 text-gray-800">Tailor</p>
            </div>
          </div>
          <div className="bg-indigo-700 rounded-md lg:w-96 w-80 flex flex-col items-center justify-center md:py-0 py-12">
            <h3 className="text-2xl font-semibold leading-6 text-center text-white">
              About Our Tailors
            </h3>
            <p className="lg:w-80 lg:px-0 px-4 text-base leading-6 text-center text-white mt-6">
              At our tailor website, we believe in the power of teamwork to
              create extraordinary garments that align with your unique vision.
              Our team of independent and skilled tailors collaborates
              seamlessly to achieve a common goal: delivering custom-fit
              clothing that exceeds your expectations.
            </p>
          </div>
          <div className="lg:w-96 w-80">
            <img
              src={tai2}
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt="woman in black dress"
            />
            <div className="bg-white shadow-md rounded-md py-4 text-center">
              <p className="text-base font-medium leading-6 text-gray-600">
                Ram Narayan
              </p>
              <p className="text-base leading-6 mt-2 text-gray-800">Tailor</p>
            </div>
          </div>
          <div className="lg:w-96 w-80">
            <img
              src={tai3}
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt="woman smiling"
            />
            <div className="bg-white shadow-md rounded-md py-4 text-center">
              <p className="text-base font-medium leading-6 text-gray-600">
                Piyush Vishwajeet
              </p>
              <p className="text-base leading-6 mt-2 text-gray-800">
                Tailor/Designer
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

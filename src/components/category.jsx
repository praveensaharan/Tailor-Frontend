import React from "react";
import { Link } from "react-router-dom";

const Blog1 = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-16 bg-blue-50">
        <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800">
              For Mens
            </h1>
            <p className="text-base leading-normal text-center text-gray-600 mt-4 lg:w-1/2 md:w-10/12 w-11/12 font-semibold">
              Discover the perfect blend of style and comfort with our
              handpicked collection of premium menswear, tailored to elevate
              your wardrobe with timeless elegance and contemporary fashion.
            </p>
          </div>
          <div className="lg:flex items-stretch md:mt-12 mt-8">
            <div className="lg:w-1/2">
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                <div className="sm:w-1/2 relative">
                  <div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        Shirts
                      </h2>

                      <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <p className="pr-2 text-sm font-medium leading-none">
                          Tailors
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <Link to="/tailors">
                    <img
                      src="https://freepngimg.com/download/dress_shirt/7-2-dress-shirt-png-hd.png"
                      className="w-full bg-slate-600 transition-transform duration-300 hover:scale-110"
                      alt="chair"
                    />
                  </Link>
                </div>
                <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                  <div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        Pants
                      </h2>

                      <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <p className="pr-2 text-sm font-medium leading-none">
                          Tailors
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <Link to="/tailors">
                    <img
                      src="https://www.target.com.au/medias/static_content/product/images/full/86/80/A1738680.jpg"
                      className="w-full transition-transform duration-300 hover:scale-110"
                      alt="wall design"
                    />
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div>
                  <div className="absolute bottom-0 left-0 md:p-10 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">
                      Suits
                    </h2>

                    <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                      <p className="pr-2 text-sm font-medium leading-none">
                        Tailors
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <Link to="/tailors">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="sitting place"
                    style={{ height: "500px" }}
                    className="w-full mt-8 md:mt-6 hidden sm:block  transition-transform duration-300 hover:scale-105"
                  />
                </Link>
                <Link to="/tailors">
                  <img
                    className="w-full mt-4 sm:hidden  transition-transform duration-300 hover:scale-105"
                    src="data:image/jpeg;base64,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"
                    alt="sitting place"
                  />
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
              <div className="relative">
                <div>
                  <div className="absolute bottom-0 left-0 md:p-10 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">
                      Kurta
                    </h2>

                    <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                      <p className="pr-2 text-sm font-medium leading-none">
                        Tailors
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <Link to="/tailors">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2lCMnvvTSl8fmdZQaFttxplJREKnsEnojg&usqp=CAU"
                    alt="sitting place"
                    style={{ height: "500px" }}
                    className="w-full sm:block hidden transition-transform duration-300 hover:scale-105"
                  />
                </Link>
                <Link to="/tailors">
                  <img
                    className="w-full sm:hidden  transition-transform duration-300 hover:scale-110"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2lCMnvvTSl8fmdZQaFttxplJREKnsEnojg&usqp=CAU"
                    alt="sitting place"
                  />
                </Link>
              </div>
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                <div className="relative w-full">
                  <div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        Sherwani
                      </h2>

                      <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <p className="pr-2 text-sm font-medium leading-none">
                          Tailors
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <Link to="/tailors">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVYFwd23Lh_Kki9uaVLQ1DDca61o9m4h8n3_oZMbsDH1rhluXZEee8eN9dLjqBauelHI8&usqp=CAU"
                      className="w-full  transition-transform duration-300 hover:scale-110"
                      style={{ height: "250px" }}
                      alt="chair"
                    />
                  </Link>
                </div>
                <div className="relative w-full sm:mt-0 mt-4">
                  <div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white bg-gray-500">
                        Achkan
                      </h2>

                      <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <p className="pr-2 text-sm font-medium leading-none bg-gray-500">
                          Tailors
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <Link to="/tailors">
                    <img
                      src="data:image/jpeg;base64,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"
                      className="w-full transition-transform duration-300 hover:scale-110"
                      style={{ height: "250px" }}
                      alt="wall design"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-blue-50">
        <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800">
              For Womens
            </h1>
            <p className="text-base leading-normal text-center text-gray-600 mt-4 lg:w-1/2 md:w-10/12 w-11/12 font-semibold">
              Embrace the essence of grace and charm with our exquisite range of
              women's clothing, thoughtfully crafted to empower your
              individuality and inspire confidence in every step you take.
            </p>
          </div>
          <div className="lg:flex items-stretch md:mt-12 mt-8">
            <div className="lg:w-1/2">
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                <div className="sm:w-1/2 relative">
                  <div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        Salwar Suit
                      </h2>

                      <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <p className="pr-2 text-sm font-medium leading-none">
                          Tailors
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <Link to="/tailors">
                    <img
                      src="data:image/jpeg;base64,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"
                      className="w-full transition-transform duration-300 hover:scale-110"
                      style={{ height: "250px" }}
                      alt="chair"
                    />
                  </Link>
                </div>
                <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                  <div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        Lancha
                      </h2>

                      <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <p className="pr-2 text-sm font-medium leading-none">
                          Tailors
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <Link to="/tailors">
                    <img
                      src="https://getethnic.com/wp-content/uploads/2020/11/5fgf4fgfc58b3d550853317f1b84e9dfa9a499fa.jpg"
                      className="w-full transition-transform duration-300 hover:scale-110"
                      style={{ height: "250px" }}
                      alt="wall design"
                    />
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div>
                  <div className="absolute bottom-0 left-0 md:p-10 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">
                      Ghagra Choli
                    </h2>

                    <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                      <p className="pr-2 text-sm font-medium leading-none">
                        Tailors
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <Link to="/tailors">
                  <img
                    src="https://i.etsystatic.com/26321584/r/il/181d45/3844551648/il_fullxfull.3844551648_2ne5.jpg"
                    alt="sitting place"
                    style={{ height: "550px" }}
                    className="w-full mt-8 md:mt-6 hidden sm:block transition-transform duration-300 hover:scale-105"
                  />
                </Link>
                <Link to="/tailors">
                  <img
                    className="w-full mt-4 sm:hidden transition-transform duration-300 hover:scale-105"
                    src="https://i.etsystatic.com/26321584/r/il/181d45/3844551648/il_fullxfull.3844551648_2ne5.jpg"
                    alt="sitting place"
                  />
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
              <div className="relative">
                <div>
                  <div className="absolute bottom-0 left-0 md:p-10 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">
                      Saree/Blouse
                    </h2>

                    <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                      <p className="pr-2 text-sm font-medium leading-none">
                        Tailors
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <Link to="/tailors">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="sitting place"
                    style={{ height: "550px" }}
                    className="w-full sm:block hidden transition-transform duration-300 hover:scale-105"
                  />
                </Link>
                <Link to="/tailors">
                  <img
                    className="w-full sm:hidden transition-transform duration-300 hover:scale-105"
                    src="data:image/jpeg;base64,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"
                    alt="sitting place"
                  />
                </Link>
              </div>
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                <div className="relative w-full">
                  <div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        Corporate (Suits)
                      </h2>

                      <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <p className="pr-2 text-sm font-medium leading-none">
                          Tailors
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <Link to="/tailors">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrmPpxcEA_UEBMHGG-jWfXzBZlxNDSLerayA&usqp=CAU"
                      className="w-full transition-transform duration-300 hover:scale-110"
                      style={{ height: "250px" }}
                      alt="chair"
                    />
                  </Link>
                </div>
                <div className="relative w-full sm:mt-0 mt-4">
                  <div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-gray-900">
                        Kurta
                      </h2>

                      <div className="flex items-center mt-4 cursor-pointer text-gray-900 hover:text-gray-200 hover:underline">
                        <p className="pr-2 text-sm font-medium leading-none">
                          Tailors
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <Link to="/tailors">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0523/7753/files/Latest-Trends-of-Summer-Lawn-Kurtis-Designs-Collection-for-Women-2015-2016-18_1024x1024.jpg?774331214420572298"
                      className="w-full transition-transform duration-300 hover:scale-110"
                      style={{ height: "250px" }}
                      alt="wall design"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog1;

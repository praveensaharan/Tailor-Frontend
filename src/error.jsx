import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const ErrorPage = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {isAuthenticated ? (
        <>
          <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
          <p className="text-lg text-gray-800 mb-2">
            Sorry, an unexpected error has occurred.
          </p>
          <p className="text-gray-500 mb-8">
            <i>Unknown Error</i>
          </p>
          <img
            src="https://source.unsplash.com/random/400x200"
            alt="Error Illustration"
            className="w-64 h-40 object-cover rounded-md shadow-lg"
          />
        </>
      ) : (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Welcome to the Access Page!
            </h2>
            <p className="text-lg text-gray-600">
              This is a protected page that can only be accessed when logged in.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;

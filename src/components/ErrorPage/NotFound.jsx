import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="w-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <div className="container mx-auto min-h-screen flex items-center justify-center  text-white px-6">
        <div className="text-center max-w-xl">
          {/* 404 Text */}
          <h1 className="text-9xl font-extrabold tracking-widest drop-shadow-lg">
            404
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-2xl md:text-3xl font-semibold">
            Page Not Found
          </p>

          {/* Description */}
          <p className="mt-2 text-lg text-gray-200">
            Sorry, the page you’re looking for doesn’t exist or has been moved.
          </p>

          {/* Button */}
          <Link to="/">
            <button className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition duration-300">
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

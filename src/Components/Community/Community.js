import React from "react";
import { Link } from "react-router-dom";
import Newcom from "./Newcom";

function Community() {
  return (
    <div className="m-20">
      {!localStorage.getItem("token") ? (
        <div
          id="Community"
          className="bg-green-200 min-h-screen flex items-center justify-center"
        >
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold mb-4">
              Welcome to the Agriculture Community
            </h1>
            <p className="text-gray-600">
              Connect with fellow farmers, share knowledge, and grow together in
              the world of agriculture.
            </p>
            <div className="mt-4 space-x-4">
              <Link
                to="/signup"
                className="bg-green-500 text-white font-semibold px-4 py-2 rounded hover:bg-green-600 transition duration-300"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <Newcom />
      )}
    </div>
  );
}

export default Community;

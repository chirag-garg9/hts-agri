import React from "react";
import { Link } from "react-router-dom";
import Newcom from "./Newcom";

function Community() {
  return (
    <div className="">
      {!localStorage.getItem("token") ? (
        <div
          id="Community"
          className="comm-bg min-h-screen flex items-center justify-center"
        >
          <div className="bg-slate-200 bg-opacity-60 p-8 rounded-lg shadow-lg">
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
        </div>      ) : (
        <Newcom />
      )}
      <div className="add"><button><img src={require("../Innovation/add.svg").default} alt="add-new-post" /></button></div>
    </div>
    
    
      )  }

export default Community;

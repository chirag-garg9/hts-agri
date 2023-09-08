import React from "react";
import "./home.css";
const Section2 = (props) => {
  return (
    <div className="mx-0 my-0 py-4 h-screen section2 flex items-center ">
      <div className=" mx-6 mb-6 left-sec2 h-auto ">
        <h2 className="pl-20 py-10 text-5xl text-left font-semibold transition ease-in-out delay-150 duration-300">
          {props.title}
        </h2>
        <p className="px-20 pb-10 text-left text-xl font-medium max-w-7xl">
          AgriBot is a cutting-edge chatbot designed to empower farmers and
          revolutionize the way they interact with agricultural information and
          expertise. Built on a foundation of artificial intelligence and
          machine learning, AgriBot is a virtual companion for farmers,
          providing them with instant access to a wealth of agricultural
          knowledge, guidance, and problem-solving capabilities.
        </p>
        <p>
          <ul className="list-none">
            <li className="pl-20 text-xl font-medium flex items-center">
              <img
                className="mr-2 h-10 w-14"
                src={require("./images/blue_check.png")}
                alt="checkbox"
              />{" "}
              Latest govt schemes
            </li>
            <li className="pl-20 text-xl font-medium flex items-center">
              <img
                className="mr-2 h-10 w-14"
                src={require("./images/blue_check.png")}
                alt="checkbox"
              />{" "}
              Market prices
            </li>
            <li className="pl-20 text-xl font-medium flex items-center">
              <img
                className="mr-2 h-10 w-10"
                src={require("./images/blue_check.png")}
                alt="checkbox"
              />{" "}
              Latest News
            </li>
          </ul>
        </p>
      </div>
      <div className="transition ease-in-out floating delay-300 duration-300 flex items-center right-sec2  ">
        <img src={require("./images/bot2.png")} alt="bot" className="w-" />
      </div>
    </div>
  );
};
export default Section2;

import React from "react";
import "./home.css";

const Section1 = (props) => {
    return (
      <div className="mx-0 my-0  h-screen flex section">
        <div className="self-center justify-start">
          <h1 className="px-10 py-10 text-left text-6xl font-semibold transition ease-in-out delay-150 hover:translate-x-1 hover:translate-y-1 duration-200">"Welcome to the Future of<div className="text-emerald-600"> Agriculture!"</div> </h1>
          <div><p className="px-10 py-0 text-left text-lg font-medium">{props.content}</p></div>
          </div>
          <img className="mr-12 my-20 border-solid border-4 rounded-full border-white h-96 w-96 self-center justify-end transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 duration-300" src={require('./images/Screenshot 2023-09-08 175940.png')} alt={props.alt} />
      </div>
    )
  }

export default Section1;

import React from "react";
import "./home.css";
const Section = (props) => {
    return (
      <div className="mx-0 my-0 bg-gray-900 flex section">
        <div className="self-center justify-start">
          <h1 className="px-10 py-10 text-left text-6xl font-semibold transition ease-in-out delay-150 hover:translate-x-1 hover:translate-y-1 duration-300">{props.title}</h1>
          <div><p className="px-10 py-0 text-left text-lg font-medium">{props.content}</p></div>
          </div>
          <img className="mx-10 my-20 border-solid border-4 rounded-full border-white h-80 w-80 self-center justify-end" src={props.image} alt={props.alt} />
      </div>
    )
  }

export default Section;

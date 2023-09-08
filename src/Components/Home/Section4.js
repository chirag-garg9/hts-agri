import React from "react";
import "./home.css";
const Section2 = (props) => {
  return (
    <div className="mx-0 my-0 py-4 h-screen section2 flex items-center">
      <div className="transition ease-in-out slide-in-r2l delay-300 hover:-translate-y-1 hover:scale-110 duration-300 flex items-center right-sec2  ">
        <img src={require("./images/Innovations.png")} alt="innovation-bulb" className="" />
      </div>
      <div className=" mx-6 left-sec2 h-auto ">
        <h2 className="pl-20 py-10 text-5xl text-left font-semibold transition ease-in-out delay-150 duration-300">
          {props.title}
        </h2>
        <p className="px-20 pb-10 text-left text-xl font-medium max-w-7xl">
        In today's rapidly evolving world, innovation is the driving force behind progress. It's the spark that ignites change, pushes boundaries, and transforms industries. To celebrate and foster this spirit of innovation, an exciting event called "Innovate and Elevate" has emerged on the global stage. This event is a platform where the latest ground-breaking innovations and advancements are showcased, with the unique opportunity for inventors to pitch their ideas for seed funding by interested investors or respective governments.
        </p>
      </div>
    </div>
  );
};
export default Section2;

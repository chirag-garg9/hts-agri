import React from "react";
import './home.css';
const Section2 = (props) => {
    return (
        <div className="mx-0 my-0 py-4 h-screen section2 flex">
        <div className=" mx-6 left-sec2 min-h-screen">
            <h2 className="px-10 py-10 text-5xl text-center font-semibold transition ease-in-out delay-150 duration-300">{props.title}</h2>
            <p className="px-20 py-0 text-left text-2xl font-medium">AI powered ChatBOT to clear all your queries</p>
            <p>
                <ul className="list-none">
                    <li className="pl-8 py-4 text-2xl font-medium flex floating"><img className="mr-2 h-14 w-14" src={require("./images/blue_check.png")} alt="checkbox" /> Latest govt schemes</li>
                    <li className="pl-12 py-4 text-2xl font-medium flex floating"><img className="mr-2 h-14 w-14" src={require("./images/blue_check.png")} alt="checkbox" /> Market prices</li>
                    <li className="pl-16 py-4 text-2xl font-medium flex floating"><img className="mr-2 h-14 w-14" src={require("./images/blue_check.png")} alt="checkbox" /> Lorem ipsum</li>
                </ul>
            </p>
            </div>
            <div className="transition ease-in-out slide-in-r2l delay-300 hover:-translate-y-1 hover:scale-110 duration-300 flex items-center right-sec2">
                <img  src={require("./images/bot2.png")} alt="bot" />
            </div>
        </div>
    )
}
export default Section2
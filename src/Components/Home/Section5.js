import React from "react";
import './home.css';

import Card from 'react-bootstrap/Card';

const Section5 = (props) => {
    return (
        <div className="mx-0 my-0 section5 h-screen flex flex-col">

            <h2 className="px-10 py-10 text-5xl text-center font-semibold transition ease-in-out delay-150 duration-300">{props.title}</h2>
            <div className="flex items-center justify-items-center">
            
            <div className="sec4-left w-1/2 p-16">
            <Card className="shadow-lg m-2 h-96 w-96 transition ease-in-out delay-300 hover:translate-y-1 hover:scale-110 duration-200 flex items-center justify-items-center" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className="sec-5-cardtext text-center text-3xl">Get the Best Price for your Produce</Card.Title>
                        <Card.Text>
                            Fetch real-time prices from markets according to location and sell your yield for the best prices out there!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="sec4-right w-1/2 p-3 items-center justify-items-center"><img className="h-1/2 w-1/2 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 duration-300" src={require("./images/profit.png")} alt="innovation-bulb" /></div>
            </div>
        </div>
    )
}
export default Section5
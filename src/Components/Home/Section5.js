import React from "react";
import './home.css';

import Card from 'react-bootstrap/Card';

import { Button } from "react-bootstrap";

const Section5 = (props) => {
    return (
        <div className="mx-0 section5 h-120 flex flex-col">

            <h2 className="px-10 py-10 text-5xl text-center font-semibold transition ease-in-out delay-150 duration-300">{props.title}</h2>
            <div className="flex items-center justify-items-center">
            
            <div className="sec5-left w-1/2 p-16 flex items-center justify-items-center">
            <Card className="shadow-lg m-2 h-96 w-100 transition ease-in-out delay-300 duration-200" style={{ width: '18rem' }}>
                    <Card.Body className=" flex flex-col items-center justify-items-center">
                        <Card.Title className="sec-5-cardtext text-center text-3xl">Get the Best Price for your Produce</Card.Title>
                        <Card.Text className="mt-10 mb-10 text-center">
                            Fetch real-time prices from markets according to location and sell your yield for the best prices out there!
                        </Card.Text>
                        <Button className="msp-btn flex items-center justify-center" href="/msp">Go to MSP  <span class="material-symbols-outlined">
east
</span></Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="sec5-right w-1/2 p-3 transition slide-in-r2l flex items-center justify-items-center"><img className="h-1/2 w-1/2 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 duration-300" src={require("./images/profit.png")} alt="innovation-bulb" /></div>
            </div>
        </div>
    )
}
export default Section5
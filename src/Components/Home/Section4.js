import React from "react";
import './home.css';
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";

const Section4 = (props) => {
    return (
        <div className="mx-0 my-0 section4 h-screen flex flex-col">

            <h2 className="px-10 py-10 text-5xl text-center font-semibold transition ease-in-out delay-150 duration-300">{props.title}</h2>
            <div className="flex items-center justify-items-center">
            <div className="sec4-left w-1/2 p-3 slide-in-l2r items-center justify-items-center "><img className="h-1/2 w-2/3 rotate-45 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 duration-300" src={require("./images/Innovations.png")} alt="innovation-bulb" /></div>
            <div className="sec4-right w-1/2 p-3">
            <Card className="shadow-lg m-2 h-96 w-96 flex items-center justify-items-center" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className="sec-4-cardtext text-center text-3xl">Recent advancements in Agro-Tech</Card.Title>
                        <Card.Text>
                            The latest ground-breaking innovations and advancements are displayed along with an option to add your own innovation! The top ones stand a chance to get Seed funding by interested investors or respective governments.   
                        </Card.Text>
                        <Button className="mt-8 flex items-center justify-center" href="/innovation">Go to Innovation <span class="material-symbols-outlined">
east
</span></Button>
                    </Card.Body>
                </Card>
            </div>
            </div>
        </div>
    )
}
export default Section4
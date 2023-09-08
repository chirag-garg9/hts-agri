import React from "react";
import Card from 'react-bootstrap/Card';

import './home.css';

const Section3 = (props) => {
    return (
        <div className="mx-0 my-0 pb-4 section3 flex flex-col">

            <h2 className="px-10 py-10 text-5xl text-center font-semibold transition ease-in-out delay-150 duration-300">{props.title}</h2>

            <div className=" flex items-center justify-items-center cards">
                <Card className="shadow-lg m-2 h-full w-1/3 transition slide-up ease-in-out delay-300 hover:translate-y-1 hover:scale-110 duration-200 flex items-center justify-items-center" style={{ width: '18rem' }}>
                    <Card.Img variant="top" className="h-50 w-60" src={require("./images/community.png")} alt="community" />
                    <Card.Body>
                        <Card.Title className="text-center">Community Participation</Card.Title>
                        <Card.Text>
                            An active community of Agriculturists, Farmers and Students responds to queries, by suggesting alternative methods to boost crop yield. Discussions on crop pattern, latest market prices and awareness about locally grown eco-friendly crops, like millets, are promoted in the forum.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="shadow-lg m-2 h-full w-1/3 transition slide-up ease-in-out delay-300 hover:translate-y-1 hover:scale-110 duration-200 flex items-center justify-items-center" style={{ width: '18rem' }}>
                    <Card.Img variant="top" className="h-42 w-48" src={require("./images/trust.jpg")} alt="trusted" />
                    <Card.Body>
                        <Card.Title className="text-center">Trusted Answers</Card.Title>
                        <Card.Text>
                            Industry experts and experienced people resolve queries. Feedback and voting algorithms to suggest Best answer to the query. Members can like the Answers to give them a boost to top!
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="shadow-lg m-2 h-full w-1/3 transition slide-up ease-in-out delay-300 hover:translate-y-1 hover:scale-110 duration-200 flex items-center justify-items-center" style={{ width: '18rem' }}>
                    <Card.Img className="h-40 w-40 mt-2.5" variant="top" src={require("./images/user-friendly.png")} alt="user-friendly" />
                    <Card.Body>
                        <Card.Title className="text-center">User Friendly</Card.Title>
                        <Card.Text>
                            Users can easily post a query or an answer in Community forum. Users can like the relevant answers and report the irrelevant ones. Reported answers will be reviewed by the team and removed, if necessary.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
export default Section3
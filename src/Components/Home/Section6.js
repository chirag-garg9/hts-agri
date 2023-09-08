import React from "react";
import './home.css';

import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";

const Section6 = (props) => {
    return (
        <div id="about">
        <div className="mx-10 mb-20 section6 h-150 flex flex-col">
          <h2 className="px-10 py-10 text-5xl text-gray-900 text-center font-semibold transition ease-in-out delay-150 duration-300">{props.title}</h2>
          <p className="px-10 py-0 text-left text-gray-900 text-lg font-medium">Our mission is: to leverage our skills and knowledge in computer science to support and empower farmers. We firmly believe that the fusion of cutting-edge technology with the primary sector, and backbone of our nation - Agriculture, can revolutionize the sector. Our primary aim is to bridge the gap between the digital world and agriculture, making it accessible to every farmer, regardless of their location or resources and connecting them on the same website.</p>
          </div>
          <div className="mx-0 my-0 bg-black section6 h-150 flex flex-col">
          <h4 className="px-10 py-10 text-5xl text-center font-medium transition ease-in-out delay-150 duration-300">Team Code Bandits</h4>
          <div className="cards flex items-center justify-center">
          <Card className="shadow-lg m-2 h-50 w-100 transition ease-in-out delay-300 duration-200" style={{ width: '18rem' }}>
                    <Card.Body className=" flex flex-col items-center justify-items-center">
                        <Card.Title className=" text-center text-3xl">Ayush Shukla</Card.Title>
                        <Card.Text className="mt-10 mb-10 text-lg text-center">
                            CSE undergraduate at NIT Raipur
                        </Card.Text>
                        <div className="flex"> <button class="bg-gray-800 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <a href="www.twitter.com"><i class="fab fa-twitter"/></a>
                  </button>
                  <button class="bg-gray-800 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <a href='www.facebook.com'>  <i class="fab fa-linkedin-in"/></a>
                  </button>
                  
                  <button class="bg-gray-800 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <a href="www.github.com"><i class="fab fa-github"/></a>
                </button></div>
                    </Card.Body>
                </Card>
                <Card className="shadow-lg m-2 h-50 w-100 transition ease-in-out delay-300 duration-200" style={{ width: '18rem' }}>
                    <Card.Body className=" flex flex-col items-center justify-items-center">
                        <Card.Title className=" text-center text-3xl">Chirag Garg</Card.Title>
                        <Card.Text className="mt-10 mb-10 text-lg text-center">
                            CSE undergraduate at NIT Raipur
                        </Card.Text>
                        <div className="flex"> <button class="bg-gray-800 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <a href="www.twitter.com"><i class="fab fa-twitter"/></a>
                  </button>
                  <button class="bg-gray-800 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <a href='www.facebook.com'>  <i class="fab fa-linkedin-in"/></a>
                  </button>
                  
                  <button class="bg-gray-800 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <a href="www.github.com"><i class="fab fa-github"/></a>
                </button></div>
                    </Card.Body>
                </Card>
                <Card className="shadow-lg m-2 h-50 w-100 transition ease-in-out delay-300 duration-200" style={{ width: '18rem' }}>
                    <Card.Body className=" flex flex-col items-center justify-items-center">
                        <Card.Title className=" text-center text-3xl">Md Gulam Gaush</Card.Title>
                        <Card.Text className="mt-10 mb-10 text-lg text-center">
                            CSE undergraduate at NIT Raipur
                        </Card.Text>
                        <div className="flex"> <button class="bg-gray-800 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <a href="www.twitter.com"><i class="fab fa-twitter"/></a>
                  </button>
                  <button class="bg-gray-800 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <a href='www.facebook.com'>  <i class="fab fa-linkedin-in"/></a>
                  </button>
                  
                  <button class="bg-gray-800 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <a href="www.github.com"><i class="fab fa-github"/></a>
                </button></div>
                    </Card.Body>
                </Card>
                <Card className="shadow-lg m-2 h-50 w-100 transition ease-in-out delay-300 duration-200" style={{ width: '18rem' }}>
                    <Card.Body className=" flex flex-col items-center justify-items-center">
                        <Card.Title className=" text-center text-3xl">Praveen Patro</Card.Title>
                        <Card.Text className="mt-10 mb-10 text-lg text-center">
                            CSE undergraduate at NIT Raipur
                        </Card.Text>
                        <div className="flex"> <button class="bg-gray-800 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <a href="https://twitter.com/praveenpatro9"><i class="fab fa-twitter"/></a>
                  </button>
                  <button class="bg-gray-800 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                <a href='https://www.linkedin.com/in/praveen-chandra-patro-1a6a5a257/'>  <i class="fab fa-linkedin-in"/></a>
                  </button>
                  
                  <button class="bg-gray-800 text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                  <a href="https://github.com/praveen-p09/"><i class="fab fa-github"/></a>
                </button></div>
                    </Card.Body>
                </Card>
          </div>
        </div>
        </div>
        )
    }
    export default Section6
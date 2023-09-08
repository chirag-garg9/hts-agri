import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
const Home = () => {
  return (
    <div>
        <Section1  content="Explore, Learn, and Grow with Our Innovative Agricultural Chatbot. Your Trusted Partner in Farming Knowledge, news, latest market prices and Insights." image="https://m.economictimes.com/thumb/msid-77969178,width-1200,height-900,resizemode-4,imgsize-727760/agri-tech.jpg" alt="field"/>
        <Section2 title="AI-Powered ChatBOT" />
        <Section3 title="Active Community"/>
        <Section4 title="Groundbreaking Innovations"/>
        <Section5 title="Real-Time Market prices"/>
        <Section6 title="About Us"></Section6>
    </div>
  )
}

export default Home
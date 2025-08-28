import React from 'react'
import Necmi from '../assets/necmi.jpg'

function HeroSection() {
  return (
    <section 
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-100 to-white px-6"
    >
      {/* <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
        Learn Economics & Statistics<br />
        <span className="text-indigo-600">With Confidence</span>
      </h2> */}
      
      <img className="m-3 w-80 lg:w-96 md:w-72 sm:w-64 max-sm:w-44 lg:pt-36 md:pt-24" src={Necmi} alt="Necmi"/>
      
      <p className="text-lg md:text-3xl text-gray-600 max-w-2xl my-6">
        <span className="text-lg md:text-3xl text-gray-600 max-w-2xl font-bold my-8">With over 15 years of experience in research and teaching,</span>
        I offer personalized tutoring in Economics and Statistics — online.  
        Boost your understanding and succeed in your courses!
      </p>

      <a 
        href="#contact"
        className="bg-indigo-600 text-white px-6 py-3 rounded-2xl text-lg font-medium shadow hover:bg-indigo-700 transition"
      >
        Book Your First Lesson
      </a>
    </section>
  );
}

export default HeroSection
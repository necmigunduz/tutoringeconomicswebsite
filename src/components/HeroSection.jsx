import React from 'react'

function HeroSection() {
  return (
    <section 
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-100 to-white px-6"
    >
      <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
        Learn Economics & Statistics<br />
        <span className="text-indigo-600">With Confidence</span>
      </h2>

      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
        I offer personalized tutoring in Economics and Statistics — online and in the Netherlands.  
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
import React from 'react'

function AboutMe() {
  return (
    <section 
      id="about" 
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-100 to-white px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          About Me
        </h2>

        <p className="text-xl md:text-xl sm:text-base max-sm:text-sm text-gray-900 leading-relaxed my-6">
          Hello! I am <span className="font-semibold text-indigo-600">Necmi Gündüz</span>,  
          an experienced tutor in <span className="font-medium">Economics</span> and <span className="font-medium">Statistics</span>.  
          I have over <span className="font-medium">15 years of experience</span> in the field of economics,  
          along with a strong background in teaching both <span className="font-medium">high school</span>  
          and <span className="font-medium">university students</span>.  
        </p>

        <p className="text-xl md:text-xl sm:text-base max-sm:text-sm text-gray-900 leading-relaxed mb-6">
          My teaching approach focuses on <span className="font-medium">clear explanations, step-by-step methods</span>,  
          and <span className="font-medium">interactive examples</span> to help you build confidence.  
          Whether you’re preparing for exams, struggling with assignments, or just want to strengthen your knowledge,  
          I am here to guide you. 
        </p>

        <p className="text-xl md:text-xl sm:text-base max-sm:text-sm text-gray-900 leading-relaxed">
          I offer lessons <span className="font-medium">online</span>.  
          Let's work together to make learning an enjoyable and rewarding experience!
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
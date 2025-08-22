import React from 'react'

function AboutMe() {
  return (
    <section 
      id="about" 
      className="py-20 bg-white px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          About Me
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Hello! I am <span className="font-semibold text-indigo-600">Necmi Gündüz</span>,  
          an experienced tutor in <span className="font-medium">Economics</span> and <span className="font-medium">Statistics</span>.  
          I have over <span className="font-medium">15 years of experience</span> in the field of economics,  
          along with a strong background in teaching both <span className="font-medium">high school</span>  
          and <span className="font-medium">university students</span>.  
        </p>

        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          My teaching approach focuses on <span className="font-medium">clear explanations, step-by-step methods</span>,  
          and <span className="font-medium">interactive examples</span> to help you build confidence.  
          Whether you’re preparing for exams, struggling with assignments, or just want to strengthen your knowledge,  
          I am here to guide you. 
        </p>

        <p className="text-lg text-gray-600 leading-relaxed">
          I offer lessons both <span className="font-medium">online</span> and <span className="font-medium">in the Netherlands</span>.  
          Let's work together to make learning an enjoyable and rewarding experience!
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
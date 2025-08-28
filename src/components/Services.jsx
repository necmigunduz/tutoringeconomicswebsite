import React from 'react'

function Services() {
  const services = [
    {
      title: "Economics Tutoring",
      description:
        "Microeconomics, Macroeconomics, and AP/IB/University-level support. Step-by-step explanations and real-world examples.",
      icon: "📈",
    },
    {
      title: "Statistics Tutoring",
      description:
        "Probability, hypothesis testing, regression, and data analysis with practical exercises and clear guidance.",
      icon: "📊",
    },
    {
      title: "Exam Preparation",
      description:
        "Tailored lessons to prepare you for exams with practice problems, mock tests, and proven strategies.",
      icon: "🎯",
    },
  ];

  return (
    <section id="services" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-100 to-white px-6">
      <div className="max-w-6xl mx-auto text-center my-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Services
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
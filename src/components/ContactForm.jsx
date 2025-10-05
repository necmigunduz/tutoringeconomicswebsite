import { useRef } from "react";
// import Display from '../assets/Display.png';
import Banner from "../assets/Banner.png";

function ContactForm() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value,
    };

    await fetch("https://backend-tutor-economics.onrender.com/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() =>
        alert(
          "Your message is on its way to Necmi! He`ll be reaching out soon to discuss how he can help you succeed. `${@mailto:necmigunduz@gmail.com}`"
        )
      )
      .catch(() =>
        alert(
          "An error occurred! Try to contact him through his email: necmigunduz@gmail.com"
        )
      );
  };

  return (
    <section
      id="contact"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-purple-100 to-white px-6"
    >
      <p className="text-3xl md:text-4xl font-bold mb-12 max-sm:mb-2 bg-black px-10 py-6 text-white rounded-lg w-full">
        Let us learn together!
      </p>
      <img
        src={Banner}
        alt="Economics Terms Ball"
        className="h-5/6 md:h-3/6 sm:h-2/6 max-sm:h-2/6 border-8 border-dashed border-l-green-600 border-r-black border-t-zinc-500 border-b-yellow-400 rounded-full mt-2 mb-5 bg-stone-200 p-1"
      />

      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 max-sm:mb-2">
        Book an Appointment
      </h2>
      <p className="text-3xl md:text-2xl sm:text-xl max-sm:text-lg font-semibold text-gray-800 mb-6">
        Would you want me to help you understand <br /> concepts in economics
        and/or statistics? <br /> <br />
        <a
          className="text-3xl md:text-2xl sm:text-xl max-sm:text-lg font-semibold hover:bg-black bg-blue-600 rounded-lg text-white hover:text-yellow-300 py-2 px-12"
          href="https://meetings-eu1.hubspot.com/necmi-gunduz"
        >
          Book a trial lesson with me
        </a>
      </p>
    </section>
    // <section
    //   id="contact"
    //   className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-100 to-white px-6"
    // >
    //   <div className="max-w-4xl mx-auto text-center">
    //     <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
    //       Contact Me
    //     </h2>
    //     <p className="text-lg text-gray-600 mb-12">
    //       Have questions or want to book a lesson? Send me a message and I’ll
    //       get back to you shortly!
    //     </p>

    //     <form ref={form} onSubmit={sendEmail} className="grid gap-6 text-left">
    //       {/* Name */}
    //       <div>
    //         <label className="block text-gray-700 font-medium mb-2">Name</label>
    //         <input
    //           type="text"
    //           name="user_name"
    //           required
    //           placeholder="Your name"
    //           className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
    //         />
    //       </div>

    //       {/* Email */}
    //       <div>
    //         <label className="block text-gray-700 font-medium mb-2">
    //           Email
    //         </label>
    //         <input
    //           type="email"
    //           name="user_email"
    //           required
    //           placeholder="you@example.com"
    //           className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
    //         />
    //       </div>

    //       {/* Message */}
    //       <div>
    //         <label className="block text-gray-700 font-medium mb-2">
    //           Message
    //         </label>
    //         <textarea
    //           name="message"
    //           rows="5"
    //           required
    //           placeholder="Write your message..."
    //           className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
    //         />
    //       </div>

    //       {/* Submit */}
    //       <button
    //         type="submit"
    //         className="bg-indigo-600 text-white font-medium px-6 py-3 rounded-xl shadow hover:bg-indigo-700 transition"
    //       >
    //         Send Message
    //       </button>
    //     </form>
    //   </div>
    // </section>
  );
}

export default ContactForm;

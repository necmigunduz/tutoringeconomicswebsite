import { useRef } from "react";

function ContactForm() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value,
    }

    const res = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    console.log('RES', res);
  };

  return (
    <section id="contact" className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-100 to-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Contact Me
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Have questions or want to book a lesson?
          Send me a message and I’ll get back to you shortly!
        </p>

        <form ref={form} onSubmit={sendEmail} className="grid gap-6 text-left">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-indigo-600 text-white font-medium px-6 py-3 rounded-xl shadow hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;

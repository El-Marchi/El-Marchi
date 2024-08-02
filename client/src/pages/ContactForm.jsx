import React, { useState } from "react";
import axios from "axios";
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import Navbar from "../components/Navbar";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [recipient_email, setEmail] = useState(localStorage.getItem("email") || "");
  const [subject, setSubject] = useState(localStorage.getItem("subject") || "");
  const [message, setMessages] = useState(localStorage.getItem("message") || "");

  function sendMail() {
    if (name && recipient_email && subject && message) {
      localStorage.setItem("email", recipient_email);
      localStorage.setItem("subject", subject);
      localStorage.setItem("message", message);

      axios.post("http://localhost:5000/send_email", {
        name,
        recipient_email,
        subject,
        message,
      })
        .then(() => alert("Message Sent Successfully"))
        .catch((err) => console.error(err));
    } else {
      alert("Please fill in all fields");
    }
  }

  return (
    <div>
        <Navbar/>
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm breadcrumbs mb-8">
        <ul className="flex items-center space-x-2 text-neutral-500">
          <li><a href="/" className="hover:text-primary transition-colors">Home</a></li> 
          <li className="before:content-['/'] before:mr-2">Contact</li>
        </ul>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-primary rounded-full p-3 mr-4">
                <FaPhone className="text-white" />
              </div>
              <h2 className="text-2xl font-semibold">Call To Us</h2>
            </div>
            <p className="text-neutral-600 mb-2">We are available 24/7, 7 days a week.</p>
            <p className="text-neutral-800 font-semibold">Phone: +880161112222</p>
          </div>

          <div>
            <div className="flex items-center mb-4">
              <div className="bg-primary rounded-full p-3 mr-4">
                <FaEnvelope className="text-white" />
              </div>
              <h2 className="text-2xl font-semibold">Write To US</h2>
            </div>
            <p className="text-neutral-600 mb-2">Fill out our form and we will contact you within 24 hours.</p>
            <p className="text-neutral-800 font-semibold">Emails: customer@exclusive.com</p>
            <p className="text-neutral-800 font-semibold">Emails: support@exclusive.com</p>
          </div>
        </div>

        <div className="md:w-2/3">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name *"
                className="w-full p-4 bg-neutral-100 rounded-md focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                required
              />
              <input
                type="email"
                value={recipient_email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email *"
                className="w-full p-4 bg-neutral-100 rounded-md focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                required
              />
            </div>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Your Subject *"
              className="w-full p-4 bg-neutral-100 rounded-md focus:ring-2 focus:ring-primary focus:outline-none transition-all"
              required
            />
            <textarea
              rows="6"
              value={message}
              onChange={(e) => setMessages(e.target.value)}
              placeholder="Your Message"
              className="w-full p-4 bg-neutral-100 rounded-md focus:ring-2 focus:ring-primary focus:outline-none transition-all resize-none"
              required
            ></textarea>
            <button
              type="button"
              onClick={sendMail}
              className="bg-primary text-white py-4 px-8 rounded-md hover:bg-red-600 transition duration-300 text-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
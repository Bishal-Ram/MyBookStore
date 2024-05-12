import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-4">
          Email:{" "}
          <a href="mailto:Bookstore@gmail.com" className="text-blue-600">
            Bookstore@gmail.com
          </a>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Contact;

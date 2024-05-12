import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          Bookstore is a premier online destination for book lovers. Our mission
          is to provide a wide selection of books and reading materials to our
          customers, along with exceptional customer service.
        </p>
        <p className="text-lg mb-4">
          Whether you're looking for the latest bestsellers, classic novels, or
          educational textbooks, we have something for everyone. Our team is
          passionate about books and is dedicated to helping you find the
          perfect read.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default About;

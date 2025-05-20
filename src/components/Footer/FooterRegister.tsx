import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function FooterRegister() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300 cursor-pointer"
          >
            <FaInstagram />
          </a>
        </div>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} AELI Madagascar. Tous droits
          réservés.
        </p>
      </div>
    </footer>
  );
}

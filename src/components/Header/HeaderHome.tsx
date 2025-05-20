"use client";
import { selectUser } from "@/redux/features/authSlice";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { useSelector } from "react-redux";
export default function HeaderHome() {
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const user: any = useSelector(selectUser);
  // console.log(user);
  const userRole = user?.user?.role || user?.role;
  const isAdmin = userRole === "admin" || userRole === "super_admin";
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-blue-800">
            AELI <span className="text-yellow-600">Madagascar</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-gray-800 hover:text-blue-700 font-medium"
          >
            Accueil
          </Link>
          <a href="#" className="text-gray-800 hover:text-blue-700 font-medium">
            Programmes
          </a>

          <a href="#" className="text-gray-800 hover:text-blue-700 font-medium">
            Admission
          </a>
          <a href="#" className="text-gray-800 hover:text-blue-700 font-medium">
            Contact
          </a>
          {user ? (
            <>
              <Link
                href={isAdmin ? "/admin" : "/student"}
                className="bg-green-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-800 transition duration-300 whitespace-nowrap cursor-pointer"
              >
                <FaUser className="mr-1 inline-block" /> Mon Compte
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/connexion"
                className="bg-yellow-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-yellow-800 transition duration-300 whitespace-nowrap cursor-pointer"
              >
                <FaUser className="mr-1 inline-block" /> Connection
              </Link>
              <Link
                href="/inscription"
                className="bg-blue-700 flex items-center gap-2 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300 whitespace-nowrap cursor-pointer"
              >
                <IoMdAdd className="text-white" />
                S'inscrire
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className=" md:hidden text-gray-800 focus:outline-none cursor-pointer"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 absolute w-full">
          <div className=" items-center flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-800 hover:text-blue-700 font-medium"
            >
              Accueil
            </Link>
            <a
              href="#"
              className="text-gray-800 hover:text-blue-700 font-medium"
            >
              Programmes
            </a>

            <a
              href="#"
              className="text-gray-800 hover:text-blue-700 font-medium"
            >
              Admission
            </a>
            <a
              href="#"
              className="text-gray-800 hover:text-blue-700 font-medium"
            >
              Contact
            </a>
            <Link
              href="/connexion"
              className="bg-yellow-600 text-sm text-white px-4 py-2 rounded-lg hover:bg-yellow-800 transition duration-300 whitespace-nowrap cursor-pointer"
            >
              <FaUser className="mr-1 inline-block" /> Connection
            </Link>
            <Link
              href="/inscription"
              className="bg-blue-700 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300 whitespace-nowrap cursor-pointer"
            >
              S'inscrire
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

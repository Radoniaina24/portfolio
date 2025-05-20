import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function HeaderRegister() {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" data-readdy="true" className="flex items-center">
          <span className="text-2xl font-bold text-blue-800">
            AELI <span className="text-yellow-600">Madagascar</span>
          </span>
        </Link>
        <Link
          href="/"
          data-readdy="true"
          className="flex items-center text-gray-700 hover:text-blue-700 cursor-pointer"
        >
          <FaArrowLeft className="mr-2" />
          <span>Retour au site</span>
        </Link>
      </div>
    </header>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-between items-center h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white p-6">
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        <h1 className="text-7xl font-extrabold text-yellow-400 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-yellow-300">
          Oups, page introuvable
        </h2>
        <p className="text-base md:text-lg text-blue-100 max-w-md">
          La page que vous cherchez n'existe pas ou a été déplacée. Veuillez
          revenir à l'accueil.
        </p>
      </div>

      <div className="w-full flex justify-center">
        <button
          onClick={() => router.push("/")}
          className="mb-6 px-6 py-3 rounded-xl bg-yellow-400 cursor-pointer text-blue-900 font-semibold text-base hover:bg-yellow-300 transition flex items-center gap-2 shadow-lg"
        >
          <ArrowLeft className="w-5 h-5" />
          Revenir au site
        </button>
      </div>
    </div>
  );
}

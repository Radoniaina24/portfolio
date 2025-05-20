import { usePortfolio } from "@/context/PortfolioContext";
import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

export default function Contact() {
  const { darkMode } = usePortfolio();
  return (
    <section
      id="contact"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Me contacter
        </h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          Vous avez un projet en tête ? N'hésitez pas à me contacter pour
          discuter de vos besoins.
        </p>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get("name") as string;
                const email = formData.get("email") as string;
                const subject = formData.get("subject") as string;
                const message = formData.get("message") as string;

                // Validation rules
                let isValid = true;
                const errors: { [key: string]: string } = {};

                if (!name || name.trim().length < 2) {
                  isValid = false;
                  errors.name = "Le nom doit contenir au moins 2 caractères";
                }

                if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                  isValid = false;
                  errors.email = "Veuillez entrer une adresse email valide";
                }

                if (!subject || subject.trim().length < 3) {
                  isValid = false;
                  errors.subject =
                    "Le sujet doit contenir au moins 3 caractères";
                }

                if (!message || message.trim().length < 10) {
                  isValid = false;
                  errors.message =
                    "Le message doit contenir au moins 10 caractères";
                }

                if (message && message.length > 500) {
                  isValid = false;
                  errors.message =
                    "Le message ne doit pas dépasser 500 caractères";
                }

                // Update error states
                const errorElements =
                  document.querySelectorAll(".error-message");
                errorElements.forEach((el) => el.remove());

                Object.keys(errors).forEach((key) => {
                  const input = document.getElementById(key);
                  if (input) {
                    const errorDiv = document.createElement("div");
                    errorDiv.className =
                      "error-message text-red-500 text-sm mt-1";
                    errorDiv.textContent = errors[key];
                    input.parentNode?.appendChild(errorDiv);
                    input.classList.add("ring-2", "ring-red-500");
                  }
                });

                // If valid, submit the form
                if (isValid) {
                  const submitButton = e.currentTarget.querySelector(
                    'button[type="submit"]'
                  ) as HTMLButtonElement;
                  submitButton.disabled = true;
                  submitButton.innerHTML =
                    '<i class="fas fa-spinner fa-spin mr-2"></i>Envoi en cours...';

                  // Simulate form submission
                  setTimeout(() => {
                    const successMessage = document.createElement("div");
                    successMessage.className =
                      "fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-500 translate-y-0 opacity-100";
                    successMessage.innerHTML =
                      '<i class="fas fa-check-circle mr-2"></i>Message envoyé avec succès!';
                    document.body.appendChild(successMessage);

                    // Reset form
                    e.currentTarget.reset();
                    submitButton.disabled = false;
                    submitButton.innerHTML = "Envoyer le message";

                    // Remove success message after 3 seconds
                    setTimeout(() => {
                      successMessage.classList.add(
                        "translate-y-[-100%]",
                        "opacity-0"
                      );
                      setTimeout(() => successMessage.remove(), 500);
                    }, 3000);
                  }, 1500);
                }
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Nom <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-blue-500 ${
                      darkMode ? "bg-gray-700" : "bg-white"
                    }`}
                    placeholder="Votre nom"
                    onChange={(e) => {
                      const errorElement =
                        e.target.parentNode?.querySelector(".error-message");
                      if (errorElement) {
                        errorElement.remove();
                        e.target.classList.remove("ring-2", "ring-red-500");
                      }
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-blue-500 ${
                      darkMode ? "bg-gray-700" : "bg-white"
                    }`}
                    placeholder="Votre email"
                    onChange={(e) => {
                      const errorElement =
                        e.target.parentNode?.querySelector(".error-message");
                      if (errorElement) {
                        errorElement.remove();
                        e.target.classList.remove("ring-2", "ring-red-500");
                      }
                    }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Sujet <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={`w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-blue-500 ${
                    darkMode ? "bg-gray-700" : "bg-white"
                  }`}
                  placeholder="Sujet de votre message"
                  onChange={(e) => {
                    const errorElement =
                      e.target.parentNode?.querySelector(".error-message");
                    if (errorElement) {
                      errorElement.remove();
                      e.target.classList.remove("ring-2", "ring-red-500");
                    }
                  }}
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-blue-500 ${
                      darkMode ? "bg-gray-700" : "bg-white"
                    }`}
                    placeholder="Votre message"
                    onChange={(e) => {
                      const errorElement =
                        e.target.parentNode?.querySelector(".error-message");
                      if (errorElement) {
                        errorElement.remove();
                        e.target.classList.remove("ring-2", "ring-red-500");
                      }
                      const charCount = document.getElementById("char-count");
                      if (charCount) {
                        charCount.textContent = `${e.target.value.length}/500`;
                        if (e.target.value.length > 500) {
                          charCount.classList.add("text-red-500");
                        } else {
                          charCount.classList.remove("text-red-500");
                        }
                      }
                    }}
                  ></textarea>
                  <div
                    id="char-count"
                    className="absolute bottom-2 right-2 text-sm text-gray-500"
                  >
                    0/500
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Envoyer le message
              </button>
            </form>
          </div>
          <div className="lg:w-1/2">
            <div
              className={`p-8 rounded-lg shadow-lg h-full ${
                darkMode ? "bg-gray-700" : "bg-white"
              }`}
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-600">
                Informations de contact
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Adresse</h4>
                    <p>Antananarivo Madagascar</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <FaEnvelope className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <a
                      href="mailto:contact@jeandupont.com"
                      className="text-blue-600 hover:underline"
                    >
                      andriambolaradoniainamichael@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <FaPhone className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Téléphone</h4>
                    <a
                      href="tel:+33612345678"
                      className="text-blue-600 hover:underline"
                    >
                      +261 32 91 907 96
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <h4 className="font-bold mb-4">Retrouvez-moi sur</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors duration-300 cursor-pointer"
                  >
                    <i className="fab fa-linkedin-in text-xl"></i>
                    <FaLinkedin className=" text-xl" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors duration-300 cursor-pointer"
                  >
                    <FaGithub className=" text-xl" />
                  </a>

                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors duration-300 cursor-pointer"
                  >
                    <FaFacebook className=" text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

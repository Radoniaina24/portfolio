import { usePortfolio } from "@/context/PortfolioContext";
import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sophie Martin",
      role: "Directrice Marketing, TechCorp",
      content:
        "Un développeur exceptionnel qui a transformé notre vision en réalité. Le projet a été livré dans les délais et avec une qualité remarquable.",
      rating: 5,
      image:
        "https://readdy.ai/api/search-image?query=Professional%20business%20woman%20portrait%2C%20warm%20smile%2C%20confident%20pose%2C%20neutral%20background%2C%20corporate%20attire%2C%20natural%20lighting%2C%20high%20quality%20professional%20headshot&width=100&height=100&seq=4&orientation=squarish",
    },
    {
      id: 2,
      name: "Thomas Dubois",
      role: "Fondateur, StartupNext",
      content:
        "Collaboration parfaite du début à la fin. Une expertise technique impressionnante et une communication claire tout au long du projet.",
      rating: 5,
      image:
        "https://readdy.ai/api/search-image?query=Professional%20business%20man%20portrait%2C%20confident%20smile%2C%20modern%20suit%2C%20neutral%20background%2C%20corporate%20headshot%2C%20natural%20lighting%2C%20high%20quality%20professional%20photo&width=100&height=100&seq=5&orientation=squarish",
    },
    {
      id: 3,
      name: "Marie Lefevre",
      role: "CTO, InnovTech",
      content:
        "Un développeur qui comprend non seulement la technique mais aussi les besoins business. Ses solutions sont toujours élégantes et évolutives.",
      rating: 5,
      image:
        "https://readdy.ai/api/search-image?query=Professional%20tech%20woman%20portrait%2C%20confident%20pose%2C%20tech%20executive%2C%20neutral%20background%2C%20smart%20casual%20attire%2C%20natural%20lighting%2C%20high%20quality%20professional%20headshot&width=100&height=100&seq=6&orientation=squarish",
    },
  ];
  const { darkMode, setCurrentTestimonial, currentTestimonial } =
    usePortfolio();
  const nextTestimonial = () => {
    setCurrentTestimonial((prev: any) => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev: any) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section
      id="temoignages"
      className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Ce que disent mes clients
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div
            className={`${
              darkMode ? "bg-gray-800" : "bg-gray-50"
            } rounded-xl p-8 md:p-12 shadow-lg`}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400 mx-1"></i>
                  )
                )}
              </div>
              <p className="text-lg italic mb-6">
                "{testimonials[currentTestimonial].content}"
              </p>
              <h4 className="font-bold text-lg">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="text-blue-600">
                {testimonials[currentTestimonial].role}
              </p>
            </div>
          </div>
          <button
            onClick={prevTestimonial}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full ${
              darkMode ? "bg-gray-700" : "bg-white"
            } shadow-lg flex items-center justify-center cursor-pointer !rounded-button whitespace-nowrap`}
          >
            <FaChevronLeft className="text-blue-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full ${
              darkMode ? "bg-gray-700" : "bg-white"
            } shadow-lg flex items-center justify-center cursor-pointer !rounded-button whitespace-nowrap`}
          >
            <FaChevronRight className="text-blue-600" />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 mx-1 rounded-full transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap ${
                currentTestimonial === index ? "bg-blue-600" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

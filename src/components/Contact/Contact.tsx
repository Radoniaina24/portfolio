import { usePortfolio } from "@/context/PortfolioContext";
import React, { useState, useRef } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaSpinner,
  FaCheckCircle,
} from "react-icons/fa";

export default function Contact() {
  const { darkMode } = usePortfolio();
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = "Le nom doit contenir au moins 2 caractères";
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Veuillez entrer une adresse email valide";
    }
    if (!formData.subject || formData.subject.trim().length < 3) {
      newErrors.subject = "Le sujet doit contenir au moins 3 caractères";
    }
    if (!formData.message || formData.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères";
    }
    if (formData.message && formData.message.length > 500) {
      newErrors.message = "Le message ne doit pas dépasser 500 caractères";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Server error");
      }

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setIsSuccess(false), 4000);
    } catch (error) {
      console.error(error);
      // ici tu peux afficher un toast ou un message d’erreur
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Adresse",
      value: "Antananarivo, Madagascar",
      href: undefined,
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "andriambolaradoniainamichael@gmail.com",
      href: "mailto:andriambolaradoniainamichael@gmail.com",
    },
    {
      icon: <FaPhone />,
      title: "Téléphone",
      value: "+261 32 91 907 96",
      href: "tel:+261329190796",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      href: "#",
      label: "LinkedIn",
      color: "hover:bg-blue-600",
    },
    {
      icon: <FaGithub />,
      href: "#",
      label: "GitHub",
      color: "hover:bg-gray-900",
    },
    {
      icon: <FaFacebook />,
      href: "#",
      label: "Facebook",
      color: "hover:bg-blue-700",
    },
  ];

  return (
    <section
      id="contact"
      className={`relative py-24 overflow-hidden ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50"
      }`}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl ${
            darkMode ? "bg-blue-900/20" : "bg-blue-200/40"
          }`}
        />
        <div
          className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl ${
            darkMode ? "bg-purple-900/20" : "bg-purple-200/30"
          }`}
        />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl ${
            darkMode ? "bg-blue-950/10" : "bg-blue-100/20"
          }`}
        />
      </div>

      {/* Success notification */}
      <div
        className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl transition-all duration-500 ${
          isSuccess
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        } bg-gradient-to-r from-emerald-500 to-green-600 text-white`}
      >
        <FaCheckCircle className="text-xl animate-bounce" />
        <span className="font-medium">Message envoyé avec succès !</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 text-sm font-semibold mb-4">
            <FaEnvelope className="text-xs" />
            <span>Contact</span>
          </div>
          <h2
            className={`text-4xl md:text-5xl font-extrabold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Me{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Contacter
            </span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto leading-relaxed ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Vous avez un projet en tête ? N&apos;hésitez pas à me contacter pour
            discuter de vos besoins et concrétiser vos idées.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
          {/* Form */}
          <div className="lg:w-3/5">
            <div
              className={`p-8 md:p-10 rounded-3xl backdrop-blur-sm border transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800/60 border-gray-700/50 shadow-2xl shadow-black/20"
                  : "bg-white/80 border-gray-200/60 shadow-xl shadow-gray-200/50"
              }`}
            >
              <h3
                className={`text-xl font-bold mb-8 flex items-center gap-3 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <FaPaperPlane className="text-white text-sm" />
                </div>
                Envoyez-moi un message
              </h3>

              <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="group">
                    <label
                      htmlFor="name"
                      className={`block mb-2 text-sm font-semibold transition-colors ${
                        focusedField === "name"
                          ? "text-blue-500"
                          : darkMode
                            ? "text-gray-300"
                            : "text-gray-700"
                      }`}
                    >
                      Nom <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-5 py-3.5 rounded-xl border-2 outline-none transition-all duration-300 ${
                          errors.name
                            ? "border-red-400 bg-red-50/50 dark:bg-red-900/10"
                            : focusedField === "name"
                              ? "border-blue-500 shadow-lg shadow-blue-500/10"
                              : darkMode
                                ? "border-gray-600 bg-gray-700/50 hover:border-gray-500"
                                : "border-gray-200 bg-gray-50/50 hover:border-gray-300"
                        } ${darkMode ? "text-white placeholder-gray-500" : "text-gray-800 placeholder-gray-400"}`}
                        placeholder="John Doe"
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-2 text-red-400 text-xs font-medium flex items-center gap-1 animate-in slide-in-from-top-1">
                        <span className="inline-block w-1 h-1 bg-red-400 rounded-full" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="group">
                    <label
                      htmlFor="email"
                      className={`block mb-2 text-sm font-semibold transition-colors ${
                        focusedField === "email"
                          ? "text-blue-500"
                          : darkMode
                            ? "text-gray-300"
                            : "text-gray-700"
                      }`}
                    >
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-3.5 rounded-xl border-2 outline-none transition-all duration-300 ${
                        errors.email
                          ? "border-red-400 bg-red-50/50 dark:bg-red-900/10"
                          : focusedField === "email"
                            ? "border-blue-500 shadow-lg shadow-blue-500/10"
                            : darkMode
                              ? "border-gray-600 bg-gray-700/50 hover:border-gray-500"
                              : "border-gray-200 bg-gray-50/50 hover:border-gray-300"
                      } ${darkMode ? "text-white placeholder-gray-500" : "text-gray-800 placeholder-gray-400"}`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-red-400 text-xs font-medium flex items-center gap-1">
                        <span className="inline-block w-1 h-1 bg-red-400 rounded-full" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label
                    htmlFor="subject"
                    className={`block mb-2 text-sm font-semibold transition-colors ${
                      focusedField === "subject"
                        ? "text-blue-500"
                        : darkMode
                          ? "text-gray-300"
                          : "text-gray-700"
                    }`}
                  >
                    Sujet <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-5 py-3.5 rounded-xl border-2 outline-none transition-all duration-300 ${
                      errors.subject
                        ? "border-red-400 bg-red-50/50 dark:bg-red-900/10"
                        : focusedField === "subject"
                          ? "border-blue-500 shadow-lg shadow-blue-500/10"
                          : darkMode
                            ? "border-gray-600 bg-gray-700/50 hover:border-gray-500"
                            : "border-gray-200 bg-gray-50/50 hover:border-gray-300"
                    } ${darkMode ? "text-white placeholder-gray-500" : "text-gray-800 placeholder-gray-400"}`}
                    placeholder="Sujet de votre message"
                  />
                  {errors.subject && (
                    <p className="mt-2 text-red-400 text-xs font-medium flex items-center gap-1">
                      <span className="inline-block w-1 h-1 bg-red-400 rounded-full" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="message"
                    className={`block mb-2 text-sm font-semibold transition-colors ${
                      focusedField === "message"
                        ? "text-blue-500"
                        : darkMode
                          ? "text-gray-300"
                          : "text-gray-700"
                    }`}
                  >
                    Message <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-3.5 rounded-xl border-2 outline-none transition-all duration-300 resize-none ${
                        errors.message
                          ? "border-red-400 bg-red-50/50 dark:bg-red-900/10"
                          : focusedField === "message"
                            ? "border-blue-500 shadow-lg shadow-blue-500/10"
                            : darkMode
                              ? "border-gray-600 bg-gray-700/50 hover:border-gray-500"
                              : "border-gray-200 bg-gray-50/50 hover:border-gray-300"
                      } ${darkMode ? "text-white placeholder-gray-500" : "text-gray-800 placeholder-gray-400"}`}
                      placeholder="Décrivez votre projet ou votre demande..."
                    />
                    <span
                      className={`absolute bottom-3 right-4 text-xs font-medium ${
                        formData.message.length > 500
                          ? "text-red-400"
                          : darkMode
                            ? "text-gray-500"
                            : "text-gray-400"
                      }`}
                    >
                      {formData.message.length}/500
                    </span>
                  </div>
                  {errors.message && (
                    <p className="mt-2 text-red-400 text-xs font-medium flex items-center gap-1">
                      <span className="inline-block w-1 h-1 bg-red-400 rounded-full" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-sm
                    hover:from-blue-700 hover:to-purple-700 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5
                    active:translate-y-0 transition-all duration-300 cursor-pointer
                    disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none
                    flex items-center justify-center gap-3 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin text-lg" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        Envoyer le message
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact info */}
          <div className="lg:w-2/5">
            <div className="space-y-6 h-full flex flex-col">
              {/* Info card */}
              <div
                className={`p-8 md:p-10 rounded-3xl backdrop-blur-sm border flex-1 transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-800/60 border-gray-700/50 shadow-2xl shadow-black/20"
                    : "bg-white/80 border-gray-200/60 shadow-xl shadow-gray-200/50"
                }`}
              >
                <h3
                  className={`text-xl font-bold mb-8 flex items-center gap-3 ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white text-sm" />
                  </div>
                  Coordonnées
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className={`group flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 cursor-default ${
                        darkMode
                          ? "hover:bg-gray-700/50"
                          : "hover:bg-blue-50/80"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 ${
                          darkMode
                            ? "bg-blue-500/15 text-blue-400"
                            : "bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600"
                        }`}
                      >
                        <span className="text-lg">{info.icon}</span>
                      </div>
                      <div className="min-w-0">
                        <h4
                          className={`font-semibold text-sm mb-1 ${
                            darkMode ? "text-gray-300" : "text-gray-500"
                          }`}
                        >
                          {info.title}
                        </h4>
                        {info.href ? (
                          <a
                            href={info.href}
                            className={`text-sm font-medium break-all transition-colors duration-300 ${
                              darkMode
                                ? "text-white hover:text-blue-400"
                                : "text-gray-800 hover:text-blue-600"
                            }`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p
                            className={`text-sm font-medium ${
                              darkMode ? "text-white" : "text-gray-800"
                            }`}
                          >
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social card */}
              <div
                className={`p-8 rounded-3xl backdrop-blur-sm border transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-800/60 border-gray-700/50 shadow-2xl shadow-black/20"
                    : "bg-white/80 border-gray-200/60 shadow-xl shadow-gray-200/50"
                }`}
              >
                <h4
                  className={`font-bold mb-5 text-sm uppercase tracking-wider ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Retrouvez-moi sur
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className={`group w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300
                        hover:scale-110 hover:-translate-y-1 hover:shadow-lg cursor-pointer ${
                          darkMode
                            ? "bg-gray-700/80 text-gray-300 hover:bg-blue-600 hover:text-white hover:shadow-blue-500/25"
                            : "bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white hover:shadow-blue-500/30"
                        }`}
                    >
                      <span className="text-xl transition-transform duration-300 group-hover:scale-110">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mailto link oluştur
    const mailtoLink = `mailto:oguzhan@dodbyte.com?subject=New Contact Form Submission&body=Name:%20${encodeURIComponent(
      formData.name
    )}%0AEmail:%20${encodeURIComponent(formData.email)}%0AMessage:%20${encodeURIComponent(formData.message)}`;

    // Kullanıcının varsayılan mail istemcisini aç
    window.location.href = mailtoLink;
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden max-w-screen">
      {/*  Dış Enerji Halkası */}
      <motion.div
        className="absolute flex items-center justify-center rounded-full energy-halo"
        style={{
          width: "600px",
          height: "550px",
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.7), rgba(255,255,255,0))",
          filter: "blur(30px)",
          boxShadow: "0px 0px 60px rgba(255, 255, 255, 0.9)",
          maxWidth: "100%",
        }}
        animate={{
          rotate: [0, 360],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      {/*  İç Küre */}
      <motion.div
        className="absolute flex items-center justify-center rounded-full"
        style={{
          width: "550px",
          height: "550px",
          background: "radial-gradient(circle, rgba(0, 0, 0, 1), rgba(0,0,0,0.8))",
          filter: "blur(10px)",
          boxShadow: "0px 0px 50px rgba(0, 0, 0, 1)",
          maxWidth: "100%",
        }}
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      />

      {/*  Form */}
      <motion.div
        className="relative z-10 bg-white/10 backdrop-blur-xl p-6 rounded-lg shadow-xl w-[90%] max-w-[400px] border border-white/15"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Get in Touch</h3>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="p-3 bg-gray-900/90 text-white rounded-md border border-purple-500 focus:ring-2 focus:ring-purple-400 transition-all duration-200"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="p-3 bg-gray-900/90 text-white rounded-md border border-purple-500 focus:ring-2 focus:ring-purple-400 transition-all duration-200"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="p-3 bg-gray-900/90 text-white rounded-md border border-purple-500 h-32 focus:ring-2 focus:ring-purple-400 transition-all duration-200"
          />
          <button
            type="submit"
            className="px-4 py-3 text-lg font-semibold text-white bg-purple-600 rounded-md hover:bg-purple-500 transition-all duration-200"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
}

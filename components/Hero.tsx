"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-container"
      >
        <h1 className="title">Hi, I&apos;m Oğuzhan Demirkaya</h1>
        <p className="bio">
          A passionate Fullstack Developer with expertise in building high-performance web applications.  
          Skilled in modern frontend frameworks and backend technologies.
        </p>

        <h3 className="findmetitle">Find Me On</h3>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/o%C4%9Fuzhan-demirkaya-1408b0269/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon linkedin" />
          </a>
          <a href="https://github.com/oguzhandemirkaya" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon github" />
          </a>
          <a href="https://www.instagram.com/oguzhandemirkayaa" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon instagram" />
          </a>
          <a href="https://t.me/oguzhandemirkaya" target="_blank" rel="noopener noreferrer">
            <FaTelegram className="social-icon telegram" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

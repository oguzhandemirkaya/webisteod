"use client";
import React, { useState } from "react";
import Image from "next/image";

interface PortfolioItem {
  id: string;
  title: string;
  gifSrc: string;
  description?: string;
  technologies?: string[];
}

const dummyData: PortfolioItem[] = [
  {
    id: "1",
    title: "Lawyer Office",
    gifSrc: "/assets/gifs/themis.gif",
    description: "Interactive website for a law firm featuring 3D animations with Three.js. Built and optimized using Webpack.",
    technologies: ["JavaScript", "Three.js", "Tailwind CSS", "Webpack", "Babel"]
  },
  {
    id: "2",
    title: "Agency",
    gifSrc: "/assets/gifs/dodbyte.gif",
    description: "Modern site with Next.js, TypeScript, and smooth animations using Framer Motion.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Radix UI", "React Hook Form", "Framer Motion", "React Slick", "Zod"]
  },
  {
    id: "3",
    title: "Corporate Website",
    gifSrc: "/assets/gifs/cnn.gif",
    description: "A corporate site ensuring high performance and interactivity.",
    technologies: ["Wordpres", "React", "GSAP", "JSS"]
  },
  {
    id: "4",
    title: "E-learning Platform",
    gifSrc: "/assets/gifs/1ms.gif",
    description: "E-learning platform with user authentication, course management, and video streaming.",
    technologies: ["React", "Tutor", "GSAP", "Wordpress"]
  },
  {
    id: "5",
    title: "E-commerce",
    gifSrc: "/assets/gifs/lumexa.gif",
    description: "Modern e-commerce platform with a headless CMS, secure auth, and interactive UI.",
    technologies: ["Woocommerce", "React", "GSAP", "wordpress"]
  },
  {
    id: "6",
    title: "Global Partnership Corporate Website",
    gifSrc: "/assets/gifs/yuhatus.gif",
    description: "Professional website with dynamic animations for a global partnership.",
    technologies: ["React", "GSAP", "Wordpress"]
  },
];

export default function PortfolioCarousel() {
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setExpandedItemId(expandedItemId === id ? null : id);
  };

  return (
    <div className="portfolio-grid-container">
      <h2 className="portfolio-grid-title">My Portfolio</h2>

      <div className="portfolio-grid">
        {dummyData.map((item) => {
          const isExpanded = expandedItemId === item.id;

          let gradientColor = "";
          switch (item.id) {
            case "1": gradientColor = "rgba(255, 255, 255, 0.3)"; break;
            case "2": gradientColor = "rgba(227, 197, 48, 0.668)"; break;
            case "3": gradientColor = "rgba(154, 246, 156, 0.668)"; break;
            case "4": gradientColor = "rgba(227, 197, 48, 0.668)"; break;
            case "5": gradientColor = "rgba(255, 255, 255, 0.3)"; break;
            case "6": gradientColor = "rgba(237, 46, 46, 0.619)"; break;
            default: gradientColor = "rgba(255, 255, 255, 0.15)";
          }

          return (
            <div
              key={item.id}
              className={`portfolio-card ${isExpanded ? "expanded" : ""}`}
              onClick={() => handleClick(item.id)}
              style={{ "--card-gradient": gradientColor } as React.CSSProperties}
            >
              <div className="portfolio-header">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <div className="portfolio-address-bar">
                  <span className="address-text">{item.title}</span>
                </div>
              </div>
              <div className="portfolio-content">
                <Image
                  src={item.gifSrc}
                  alt={item.title}
                  width={250}
                  height={140}
                  className="portfolio-gif"
                  priority
                  unoptimized
                />
              </div>
              <div className="item-details">
                <h3 className="item-details-title">{item.title}</h3>
                {item.description && <p className="item-details-desc">{item.description}</p>}
                {item.technologies && (
                  <ul className="tech-list">
                    {item.technologies.map((tech) => (
                      <li key={tech} className="tech-item">{tech}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

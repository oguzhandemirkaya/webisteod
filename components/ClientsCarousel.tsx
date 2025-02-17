"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // ✅ Next.js Image bileşeni eklendi

interface Client {
  id: string;
  logo: string;
  alt: string;
}

const clients: Client[] = [
  { id: "1", logo: "/assets/logos/cnn.webp", alt: "CNN Global" },
  { id: "2", logo: "/assets/logos/lumexa.webp", alt: "Lumexa LLC" },
  { id: "3", logo: "/assets/logos/1ms.webp", alt: "1MS Group" },
  { id: "4", logo: "/assets/logos/vituras.webp", alt: "Vituras" },
  { id: "5", logo: "/assets/logos/cookplato.webp", alt: "Cook Plato" },
  { id: "6", logo: "/assets/logos/su.webp", alt: "SU" },
  { id: "7", logo: "/assets/logos/jasmedico.webp", alt: "Jasmedico" },
  { id: "8", logo: "/assets/logos/ba.webp", alt: "Büyük Anadolu" },
  { id: "9", logo: "/assets/logos/falcon.webp", alt: "Falcon Sanayi" },
  { id: "10", logo: "/assets/logos/yuhatus.webp", alt: "Yuhatus" },
];

export default function ClientsCarousel() {
  return (
    <div className="clients-container">
      {/* Başlık Animasyonu */}
      <motion.h2
        className="clients-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        My Clients
      </motion.h2>

      {/* Grid Yapısı */}
      <motion.div
        className="clients-grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {clients.map((client, index) => (
          <motion.div
            key={client.id}
            className="client-box"
            initial={{
              opacity: 0,
              scale: 0.85, 
              y: 30, 
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.4, 
              ease: "easeOut",
              delay: index * 0.05, 
            }}
          >
            {/* ✅ Optimize edilmiş Next.js Image bileşeni */}
            <Image
              src={client.logo}
              alt={client.alt}
              width={100}
              height={50}
              className="client-logo"
              priority
              unoptimized
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

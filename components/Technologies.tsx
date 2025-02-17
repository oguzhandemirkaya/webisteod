"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const frontendTechnologies = [
  { name: "JavaScript", image: "/assets/tech/js.svg", color: "yellow" },
  { name: "TypeScript", image: "/assets/tech/ts.svg", color: "blue" },
  { name: "React.js", image: "/assets/tech/react.svg", color: "blue" },
  { name: "Next.js", image: "/assets/tech/next.svg", color: "white" },
  { name: "Tailwind CSS", image: "/assets/tech/tailwind.svg", color: "blue" },
  { name: "Redux", image: "/assets/tech/redux.svg", color: "purple" },
  { name: "Framer Motion", image: "/assets/tech/framer.svg", color: "pink" },
  { name: "Three.js", image: "/assets/tech/threejs.svg", color: "white" },
];

const backendTechnologies = [
  { name: "Node.js", image: "/assets/tech/node.svg", color: "green" },
  { name: "Express.js", image: "/assets/tech/express.svg", color: "white" },
  { name: "PostgreSQL", image: "/assets/tech/postgresql.svg", color: "blue" },
  { name: "GraphQL", image: "/assets/tech/graphql.svg", color: "pink" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

const Technologies = () => {
  return (
    <section className="technologies">
      <motion.h2 
        className="title"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      <motion.div
        className="tech-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h3 
          className="tech-section-title"
          variants={titleVariants}
        >
          Frontend
        </motion.h3>
        <motion.div className="tech-stack">
          {frontendTechnologies.map((tech, index) => (
            <motion.div
              key={index}
              className="tech-card"
              data-color={tech.color}
              variants={itemVariants}
            >
              <Image src={tech.image} alt={tech.name} width={50} height={50} priority />
              <p>{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="tech-section"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h3 
          className="tech-section-title"
          variants={titleVariants}
        >
          Backend
        </motion.h3>
        <motion.div className="tech-stack">
          {backendTechnologies.map((tech, index) => (
            <motion.div
              key={index}
              className="tech-card"
              data-color={tech.color}
              variants={itemVariants}
            >
              <Image src={tech.image} alt={tech.name} width={50} height={50} priority />
              <p>{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Technologies;

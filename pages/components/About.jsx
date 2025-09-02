import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-950 to-neutral-900 text-white overflow-hidden px-6 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent)]" />

      <motion.div
        className="max-w-4xl text-center space-y-6 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Sobre Nós
        </h2>
        <p className="text-lg text-neutral-300 leading-relaxed">
          Somos uma equipe apaixonada por tecnologia e inovação. Nossa missão é{" "}
          <span className="text-green-400 font-semibold">transformar ideias em realidades digitais</span>, criando soluções modernas e impactantes para empresas do futuro.
        </p>
      </motion.div>
    </section>
  );
};

export default About;

// app/components/Hero.jsx
"use client";

import Link from "next/link";


const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-neutral-900" />

      <motion.h1
        className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-400 to-purple-600"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        EvoNet AI
      </motion.h1>

      <motion.p
        className="mt-6 text-lg md:text-xl text-neutral-300 max-w-2xl px-4 md:px-0"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Inteligência Artificial aplicada para transformar sua empresa e levar sua tecnologia a um novo nível.
      </motion.p>

      <motion.a
        href="#solucoes"
        aria-label="Explorar Soluções"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-green-500 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/30 transition-all"
      >
        Explorar Soluções
      </motion.a>
    </section>
  );
};

export default Hero;

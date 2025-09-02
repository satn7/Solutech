import React from "react";
import Link from "next/link";



const projects = [
  { title: "Plataforma AI", desc: "Integração de IA em processos corporativos." },
  { title: "Cloud Secure", desc: "Infraestrutura em nuvem com máxima segurança." },
  { title: "Smart Automation", desc: "Automação inteligente para empresas de logística." },
];

const Portfolio = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-black via-neutral-950 to-neutral-900 text-white">
      <motion.h2
        className="text-center text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Portfólio
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="p-6 bg-neutral-900 rounded-2xl border border-neutral-800 shadow-[0_0_25px_rgba(59,130,246,0.2)] hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-neutral-400">{proj.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

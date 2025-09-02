import React from "react";
import { motion } from "framer-motion";
import { Cpu, Cloud, Shield, Zap } from "lucide-react";

const solutions = [
  { icon: <Cpu className="w-10 h-10 text-blue-400" />, title: "IA & Automação", desc: "Soluções inteligentes para automatizar processos e aumentar a produtividade." },
  { icon: <Cloud className="w-10 h-10 text-green-400" />, title: "Cloud & Infra", desc: "Infraestrutura escalável e segura para suportar o crescimento do seu negócio." },
  { icon: <Shield className="w-10 h-10 text-purple-400" />, title: "Cibersegurança", desc: "Proteção avançada contra ameaças digitais e ataques cibernéticos." },
  { icon: <Zap className="w-10 h-10 text-yellow-400" />, title: "Performance", desc: "Otimização de sistemas para máxima eficiência e velocidade." },
];

const Solutions = () => {
  return (
    <section id="solutions" className="relative py-24 bg-neutral-950 text-white overflow-hidden">
      <motion.h2
        className="text-center text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-purple-500"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Nossas Soluções
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {solutions.map((sol, index) => (
          <motion.div
            key={index}
            className="p-6 bg-neutral-900 rounded-2xl border border-neutral-800 shadow-[0_0_25px_rgba(59,130,246,0.2)] hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-4">{sol.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{sol.title}</h3>
            <p className="text-neutral-400">{sol.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;

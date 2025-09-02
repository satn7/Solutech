import React from "react";
import { motion } from "framer-motion";
import { Wifi, Shield, Network, Lock } from "lucide-react";

const Redes = () => {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-black via-neutral-950 to-neutral-900 text-white overflow-hidden">
      {/* 🔥 Background Animated Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,rgba(59,130,246,0.15)_1px,transparent_1px),linear-gradient(0deg,rgba(59,130,246,0.15)_1px,transparent_1px)] bg-[length:45px_45px] animate-[pulse_6s_infinite]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-green-500/5 to-purple-500/10 animate-pulse" />
      </div>

      {/* Glow Effects */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-3xl animate-pulse" />

      {/* Header */}
      <motion.header
        className="text-center pt-20 relative z-10"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-6xl md:text-7xl font-orbitron font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-500 to-purple-600 drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]"
          animate={{ textShadow: ["0 0 20px #3b82f6", "0 0 40px #22c55e", "0 0 20px #a855f7"] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        >
          Redes Corporativas
        </motion.h1>
        <p className="mt-6 text-neutral-300 text-lg max-w-2xl mx-auto">
          Conexões seguras, rápidas e confiáveis para todos os tipos de negócios.  
          O futuro da conectividade começa aqui 🌐.
        </p>
      </motion.header>

      {/* Cards Grid */}
      <section className="relative z-10 px-6 py-20 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {[
          {
            title: "LAN & WAN",
            desc: "Conexões de alta velocidade para escritórios e filiais.",
            icon: <Network className="w-12 h-12 text-blue-400" />,
          },
          {
            title: "Firewall",
            desc: "Proteção avançada contra ameaças externas e ataques.",
            icon: <Shield className="w-12 h-12 text-green-400" />,
          },
          {
            title: "VPN",
            desc: "Acesso remoto seguro e confiável para equipes distribuídas.",
            icon: <Lock className="w-12 h-12 text-purple-400" />,
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08, rotateY: 10 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="p-8 bg-neutral-950/70 rounded-2xl border border-neutral-800 shadow-[0_0_25px_rgba(59,130,246,0.2)] hover:shadow-[0_0_45px_rgba(59,130,246,0.6)] backdrop-blur-xl"
          >
            <motion.div
              initial={{ rotate: -20, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              {item.icon}
            </motion.div>
            <h3 className="text-2xl font-semibold text-blue-400">{item.title}</h3>
            <p className="mt-3 text-neutral-400">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Serviços */}
      <section className="relative z-10 px-6 max-w-5xl mx-auto pb-24">
        <motion.h2
          className="text-4xl md:text-5xl font-orbitron text-center mb-12 text-green-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.8)]"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Serviços de Conectividade
        </motion.h2>
        <ul className="grid md:grid-cols-2 gap-8 text-lg">
          {[
            { text: "🌐 Redes LAN e WAN de alta performance", icon: <Wifi className="inline w-6 h-6 text-blue-400" /> },
            { text: "🛡️ Configuração de Firewalls inteligentes", icon: <Shield className="inline w-6 h-6 text-green-400" /> },
            { text: "🔒 VPN corporativa para trabalho remoto", icon: <Lock className="inline w-6 h-6 text-purple-400" /> },
            { text: "⚡ Monitoramento e suporte 24/7", icon: <Wifi className="inline w-6 h-6 text-cyan-400" /> },
          ].map((service, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.07, rotate: 1 }}
              transition={{ duration: 0.4 }}
              className="p-6 bg-neutral-900/80 rounded-2xl border border-blue-500/40 hover:border-green-400/60 transition backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]"
            >
              {service.icon} <span className="ml-2">{service.text}</span>
            </motion.li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Redes;

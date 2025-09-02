import React from "react";
import Link from "next/link";
import  TrendingUp, Shield, Zap  from "lucide-react";

const Cases = () => {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-black via-neutral-950 to-neutral-900 text-white overflow-hidden">
      {/* 🔥 Background Tech Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,rgba(34,197,94,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(59,130,246,0.12)_1px,transparent_1px)] bg-[length:60px_60px] animate-[pulse_7s_infinite]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-blue-600/5 to-purple-500/10 animate-pulse" />
      </div>

      {/* Glow Layers */}
      <div className="absolute -top-40 left-0 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl animate-pulse" />

      {/* Header */}
      <motion.header
        className="relative z-10 text-center pt-20"
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-6xl md:text-7xl font-orbitron font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 drop-shadow-[0_0_25px_rgba(34,197,94,0.8)]"
          animate={{ textShadow: ["0 0 25px #22c55e", "0 0 45px #3b82f6", "0 0 25px #a855f7"] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        >
          Cases de Sucesso
        </motion.h1>
        <p className="mt-6 text-neutral-300 text-lg max-w-2xl mx-auto">
          Como nossas soluções transformaram empresas em verdadeiras referências do mercado ⚡.
        </p>
      </motion.header>

      {/* Cases Grid */}
      <section className="relative z-10 px-6 py-20 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {[
          {
            title: "Empresa A",
            desc: "Redução de custos em 30% com infraestrutura otimizada.",
            icon: <TrendingUp className="w-12 h-12 text-green-400" />,
            glow: "shadow-[0_0_25px_rgba(34,197,94,0.6)] hover:shadow-[0_0_45px_rgba(34,197,94,0.9)]",
          },
          {
            title: "Empresa B",
            desc: "Redes seguras e escaláveis implementadas em apenas 2 semanas.",
            icon: <Shield className="w-12 h-12 text-blue-400" />,
            glow: "shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:shadow-[0_0_45px_rgba(59,130,246,0.9)]",
          },
          {
            title: "Empresa C",
            desc: "Suporte 24/7 e monitoramento contínuo elevaram uptime a 99,9%.",
            icon: <Zap className="w-12 h-12 text-purple-400" />,
            glow: "shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:shadow-[0_0_45px_rgba(168,85,247,0.9)]",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08, rotateY: 8 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className={`p-8 bg-neutral-950/70 rounded-2xl border border-neutral-800 backdrop-blur-xl ${item.glow}`}
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="mb-6"
            >
              {item.icon}
            </motion.div>
            <h3 className="text-2xl font-semibold text-green-400">{item.title}</h3>
            <p className="mt-3 text-neutral-400">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Extra Highlights */}
      <section className="relative z-10 px-6 max-w-5xl mx-auto pb-24 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-orbitron text-blue-400 mb-12 drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Resultados que falam por si
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { stat: "99,9%", label: "Uptime garantido" },
            { stat: "30%", label: "Redução de custos" },
            { stat: "2 Semanas", label: "Tempo recorde de implantação" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
              className="p-8 bg-neutral-900/80 rounded-2xl border border-green-500/40 backdrop-blur-md shadow-[0_0_25px_rgba(34,197,94,0.3)]"
            >
              <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {item.stat}
              </p>
              <p className="mt-2 text-neutral-400">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Cases;

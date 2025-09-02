import React from "react";
import Link from "next/link";
import  Code2, Network, Headphones from "lucide-react";

const Carreiras = () => {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-black via-neutral-950 to-neutral-900 text-white overflow-hidden">
      {/* 🔹 Fundo com grid tecnológico */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,rgba(59,130,246,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(34,197,94,0.12)_1px,transparent_1px)] bg-[length:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-blue-600/5 to-purple-500/10 animate-pulse" />
      </div>

      {/* Glows */}
      <div className="absolute -top-40 left-0 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl animate-pulse" />

      {/* Cabeçalho */}
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
          Carreiras
        </motion.h1>
        <p className="mt-6 text-neutral-300 text-lg max-w-2xl mx-auto">
          Junte-se a nós e faça parte de um <span className="text-green-400">time inovador</span> que está moldando o <span className="text-blue-400">futuro da tecnologia</span>.
        </p>
      </motion.header>

      {/* Vagas */}
      <section className="relative z-10 px-6 py-20 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {[
          {
            title: "Desenvolvedor Frontend",
            desc: "React, CSS e animações modernas para criar experiências incríveis.",
            icon: <Code2 className="w-12 h-12 text-green-400" />,
            glow: "shadow-[0_0_25px_rgba(34,197,94,0.6)] hover:shadow-[0_0_45px_rgba(34,197,94,0.9)]",
          },
          {
            title: "Administrador de Redes",
            desc: "Gerencie infraestrutura crítica e redes seguras.",
            icon: <Network className="w-12 h-12 text-blue-400" />,
            glow: "shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:shadow-[0_0_45px_rgba(59,130,246,0.9)]",
          },
          {
            title: "Suporte Técnico",
            desc: "Atendimento proativo e resolução de problemas de TI.",
            icon: <Headphones className="w-12 h-12 text-purple-400" />,
            glow: "shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:shadow-[0_0_45px_rgba(168,85,247,0.9)]",
          },
        ].map((vaga, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08, rotateY: 8 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className={`p-8 bg-neutral-950/70 rounded-2xl border border-neutral-800 backdrop-blur-xl ${vaga.glow}`}
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="mb-6"
            >
              {vaga.icon}
            </motion.div>
            <h3 className="text-2xl font-semibold text-green-400">{vaga.title}</h3>
            <p className="mt-3 text-neutral-400">{vaga.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Chamada Final */}
      <section className="relative z-10 px-6 max-w-4xl mx-auto pb-24 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-orbitron text-purple-400 mb-6 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Pronto para o Desafio?
        </motion.h2>
        <p className="text-neutral-300 mb-8">
          Se você respira <span className="text-green-400">inovação</span>, gosta de <span className="text-blue-400">resolver problemas</span> e busca crescer em um <span className="text-purple-400">ambiente futurista</span> — seu lugar é aqui.
        </p>
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(34,197,94,0.8)" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 text-lg font-semibold rounded-xl bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.6)]"
        >
          Enviar Currículo
        </motion.button>
      </section>
    </main>
  );
};

export default Carreiras;

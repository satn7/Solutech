import React from "react";
import Link from "next/link";
import  Cpu, ShieldCheck, Cloud  from "lucide-react";

const Blog = () => {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-black via-neutral-950 to-neutral-900 text-white overflow-hidden">
      {/* 🔹 Fundo com grid tecnológico */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,rgba(34,197,94,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(59,130,246,0.12)_1px,transparent_1px)] bg-[length:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-blue-600/5 to-purple-500/10 animate-pulse" />
      </div>

      {/* Glow Futurista */}
      <div className="absolute -top-40 left-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-3xl animate-pulse" />

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
          Blog
        </motion.h1>
        <p className="mt-6 text-neutral-300 text-lg max-w-2xl mx-auto">
          Dicas, novidades e tendências em <span className="text-green-400">tecnologia</span> e <span className="text-blue-400">inovação</span>.
        </p>
      </motion.header>

      {/* Grid de Posts */}
      <section className="relative z-10 px-6 py-20 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {[
          {
            title: "Transformação Digital",
            desc: "Como empresas estão se adaptando à era digital.",
            icon: <Cpu className="w-12 h-12 text-green-400" />,
            glow: "shadow-[0_0_25px_rgba(34,197,94,0.6)] hover:shadow-[0_0_45px_rgba(34,197,94,0.9)]",
          },
          {
            title: "Segurança em Redes",
            desc: "Proteja seus dados e evite ataques cibernéticos.",
            icon: <ShieldCheck className="w-12 h-12 text-blue-400" />,
            glow: "shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:shadow-[0_0_45px_rgba(59,130,246,0.9)]",
          },
          {
            title: "Cloud Computing",
            desc: "Benefícios da nuvem para empresas de todos os portes.",
            icon: <Cloud className="w-12 h-12 text-purple-400" />,
            glow: "shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:shadow-[0_0_45px_rgba(168,85,247,0.9)]",
          },
        ].map((post, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08, rotateY: 8 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className={`p-8 bg-neutral-950/70 rounded-2xl border border-neutral-800 backdrop-blur-xl ${post.glow}`}
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="mb-6"
            >
              {post.icon}
            </motion.div>
            <h3 className="text-2xl font-semibold text-green-400">{post.title}</h3>
            <p className="mt-3 text-neutral-400">{post.desc}</p>
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
          Explore o Futuro Hoje
        </motion.h2>
        <p className="text-neutral-300 mb-8">
          Conhecimento é poder ⚡ — e aqui você encontra as ideias que moldam o amanhã.
        </p>
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(34,197,94,0.8)" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 text-lg font-semibold rounded-xl bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-[0_0_20px_rgba(34,197,94,0.6)]"
        >
          Ver Todos os Artigos
        </motion.button>
      </section>
    </main>
  );
};

export default Blog;

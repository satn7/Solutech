import React from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare } from "lucide-react";

const Contato = () => {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-black via-neutral-950 to-neutral-900 text-white overflow-hidden">
      {/* 🔹 Fundo com grid tecnológico */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[length:70px_70px]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-green-500/5 to-purple-500/10 animate-pulse" />
      </div>

      {/* Glows */}
      <div className="absolute -top-40 left-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl animate-pulse" />

      {/* Cabeçalho */}
      <motion.header
        className="relative z-10 text-center pt-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-6xl md:text-7xl font-orbitron font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-purple-500 drop-shadow-[0_0_25px_rgba(59,130,246,0.8)]"
          animate={{ textShadow: ["0 0 25px #3b82f6", "0 0 45px #22c55e", "0 0 25px #a855f7"] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
        >
          Contato
        </motion.h1>
        <p className="mt-6 text-neutral-300 text-lg max-w-2xl mx-auto">
          Entre em contato e descubra como podemos <span className="text-green-400">transformar</span> sua <span className="text-blue-400">tecnologia</span>.
        </p>
      </motion.header>

      {/* Formulário futurista */}
      <section className="relative z-10 px-6 py-20 max-w-3xl mx-auto">
        <motion.form
          className="space-y-6 bg-neutral-950/60 border border-neutral-800 p-10 rounded-3xl backdrop-blur-xl shadow-[0_0_30px_rgba(59,130,246,0.3)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Nome */}
          <div className="relative">
            <User className="absolute left-3 top-3 text-blue-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Nome"
              required
              className="w-full pl-10 pr-4 py-3 bg-transparent border-b-2 border-blue-500/50 focus:border-green-400 outline-none text-white placeholder-neutral-400 transition-all"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-green-400 w-5 h-5" />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full pl-10 pr-4 py-3 bg-transparent border-b-2 border-green-500/50 focus:border-purple-400 outline-none text-white placeholder-neutral-400 transition-all"
            />
          </div>

          {/* Mensagem */}
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-purple-400 w-5 h-5" />
            <textarea
              placeholder="Mensagem"
              required
              rows="5"
              className="w-full pl-10 pr-4 py-3 bg-transparent border-b-2 border-purple-500/50 focus:border-blue-400 outline-none text-white placeholder-neutral-400 transition-all resize-none"
            ></textarea>
          </div>

          {/* Botão */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(59,130,246,0.8)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center gap-2 py-3 px-6 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-500 via-green-500 to-purple-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all"
          >
            <Send className="w-5 h-5" />
            Enviar
          </motion.button>
        </motion.form>
      </section>
    </main>
  );
};

export default Contato;

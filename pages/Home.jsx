/ components/Home.jsx
import React from "react";
import Link from "next/link";
import { Cpu, Wifi, HardHat } from "lucide-react";

export default function Home() {
  const cards = [
    {
      titulo: "Infraestrutura de TI",
      desc: "Gerenciamento completo de computadores, sistemas e servidores sob controle absoluto.",
      cor: "border-green-400",
      icon: "💻",
    },
    {
      titulo: "Redes Inteligentes",
      desc: "Arquitetura e configuração de redes LAN, WAN e Wi-Fi de alta performance.",
      cor: "border-blue-400",
      icon: "🌐",
    },
    {
      titulo: "Suporte Técnico Premium",
      desc: "Instalação, manutenção e suporte técnico 24/7 com atendimento dedicado.",
      cor: "border-purple-400",
      icon: "🛠️",
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Fundo animado com gradiente e partículas */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-blue-950 to-black animate-gradient-x mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-[url('/particles.svg')] bg-cover opacity-20"></div>

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center px-6 space-y-8">
        {/* Hero principal */}
        <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 animate-text-flicker">
          Transformando <span className="text-white">tecnologia</span> em soluções inteligentes
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl animate-fade-in-up">
          Solutech: inovação, redes inteligentes e suporte técnico premium para empresas e startups visionárias.
        </p>

        {/* Botão com efeito neon e pulse */}
        <Link
          href="/solucoes"
          className="relative inline-block px-10 py-4 mt-4 font-semibold text-white rounded-3xl bg-gradient-to-r from-blue-600 to-green-500 shadow-lg hover:scale-105 transition-transform animate-pulse hover:brightness-125"
        >
          Conheça nossas soluções
          <span className="absolute inset-0 rounded-3xl border border-white opacity-20 animate-ping"></span>
        </Link>

        {/* Cards de destaque */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 w-full">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`relative group bg-neutral-900 border ${card.cor} p-8 rounded-3xl text-left transform transition-transform duration-500 hover:-translate-y-3 hover:scale-105 shadow-2xl hover:shadow-neon`}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                {card.titulo}
              </h2>
              <p className="text-gray-400 group-hover:text-gray-100 transition-colors">{card.desc}</p>

              {/* Background animado em cards */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 via-purple-500 to-green-400 opacity-10 rounded-3xl blur-xl pointer-events-none transform scale-90 group-hover:scale-100 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Animações adicionais de partículas flutuantes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white rounded-full opacity-30 animate-float`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Keyframes customizados */}
      <style jsx>{`
        @keyframes animate-gradient-x {
          0%,100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: animate-gradient-x 15s ease infinite;
        }
        @keyframes animate-text-flicker {
          0%,100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-text-flicker {
          animation: animate-text-flicker 1.5s infinite;
        }
        @keyframes animate-fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: animate-fade-in-up 1.2s ease forwards;
        }
        @keyframes animate-float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        .animate-float {
          animation: animate-float linear infinite alternate;
        }
        .shadow-neon {
          box-shadow: 0 0 15px rgba(0,255,255,0.4), 0 0 30px rgba(255,0,255,0.3);
        }
      `}</style>
    </section>
  );
}
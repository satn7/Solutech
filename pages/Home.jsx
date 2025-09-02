// Arquivo: components/Home.jsx
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative pt-24 px-6 text-center overflow-hidden">
      {/* Fundo animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-blue-950 to-black opacity-80 animate-gradient-x"></div>
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center space-y-6">
        {/* Hero principal */}
        <h1 className="text-5xl md:text-7xl font-orbitron mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 animate-text-flicker">
          Transformando tecnologia em soluções inteligentes
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 mb-8 animate-fade-in">
          Solutech: inovação, redes inteligentes e suporte técnico premium.
        </p>
        <Link
          href="/solucoes"
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-500 hover:scale-105 transition-transform rounded-2xl font-semibold text-white shadow-lg"
        >
          Conheça nossas soluções
        </Link>

        {/* Cards de destaque */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 w-full">
          {[
            {
              titulo: "Infraestrutura de TI",
              desc: "Computadores, sistemas e servidores sob controle.",
              cor: "border-green-500",
            },
            {
              titulo: "Redes Inteligentes",
              desc: "Arquitetura e configuração de redes LAN, WAN e Wi-Fi.",
              cor: "border-blue-500",
            },
            {
              titulo: "Suporte Técnico Premium",
              desc: "Instalação, manutenção e suporte 24/7.",
              cor: "border-purple-500",
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`bg-neutral-900 border ${card.cor} p-6 rounded-2xl text-left hover:scale-105 transition-transform shadow-lg`}
            >
              <h2 className="text-2xl font-semibold mb-2 text-white">{card.titulo}</h2>
              <p className="text-neutral-400">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
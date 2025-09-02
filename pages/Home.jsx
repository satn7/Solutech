import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative pt-24 px-6 text-center overflow-hidden">
      {/* Fundo animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-blue-950 to-black opacity-80 animate-gradient-x"></div>
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center space-y-6">
        {/* Hero principal */}
        <h1 className="text-6xl md:text-7xl font-orbitron mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 animate-text-flicker">
          Transformando tecnologia em soluções inteligentes
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 mb-8 animate-fade-in">
          Solutech: inovação, redes inteligentes e suporte técnico premium.
        </p>
        <Link
          to="/solucoes"
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
              desc: "Arquitetura e configuração de redes LAN, WAN e Wi-Fi corporativo.",
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

        {/* Seção de chamada para ação */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-orbitron text-blue-400 mb-4 animate-fade-in">
            Pronto para transformar sua empresa?
          </h2>
          <p className="text-neutral-300 mb-6 animate-fade-in">
            Entre em contato com a Solutech e descubra como podemos otimizar sua infraestrutura, redes e suporte técnico com soluções inteligentes e personalizadas.
          </p>
          <Link
            to="/contato"
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 hover:scale-105 transition-transform rounded-2xl font-semibold text-white shadow-lg"
          >
            Fale conosco
          </Link>
        </div>
      </div>
    </section>
  );
}

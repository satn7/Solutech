import React from "react";
import Link from "next/link";
export default function Solucoes() {
  const servicos = [
    { nome: "Infraestrutura de TI", rota: "/infraestrutura", desc: "Computadores, sistemas e servidores sob controle." },
    { nome: "Redes Inteligentes", rota: "/redes", desc: "Arquitetura e configuração de redes LAN, WAN e Wi-Fi corporativo." },
    { nome: "Suporte Técnico Premium", rota: "/suporte", desc: "Instalação, manutenção e suporte 24/7." },
  ];

  return (
    <section className="pt-24 px-6 max-w-6xl mx-auto">
      <h1 className="text-5xl font-orbitron text-blue-400 mb-12 text-center">Nossas Soluções</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {servicos.map((s, i) => (
          <Link
            key={i}
            to={s.rota}
            className="group bg-neutral-900 p-8 rounded-2xl border border-blue-600 hover:border-green-400 transition transform hover:scale-105 shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4 group-hover:text-green-400">{s.nome}</h2>
            <p className="text-neutral-400 group-hover:text-white">{s.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

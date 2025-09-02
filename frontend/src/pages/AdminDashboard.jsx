import React from "react";

export default function AdminDashboard() {
  const cards = [
    { titulo: "Usuários", desc: "Gerencie contas e permissões." },
    { titulo: "Relatórios", desc: "Estatísticas em tempo real." },
    { titulo: "Configurações", desc: "Personalize seu ambiente." },
  ];

  return (
    <section className="pt-24 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-orbitron text-blue-400 mb-10 text-center">
        Painel Administrativo
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((c, i) => (
          <div
            key={i}
            className="bg-neutral-900 p-6 rounded-2xl border border-blue-600 hover:border-green-400 transition transform hover:scale-105 text-center"
          >
            <h2 className="font-semibold text-xl mb-2">{c.titulo}</h2>
            <p className="text-neutral-400">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

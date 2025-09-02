import React from "react";

export default function Carreiras() {
  const vagas = [
    { cargo: "Engenheiro de Redes", tipo: "Presencial", nivel: "Pleno" },
    { cargo: "Especialista em Suporte", tipo: "Remoto", nivel: "Júnior" },
    { cargo: "Arquiteto de Sistemas", tipo: "Híbrido", nivel: "Sênior" },
  ];

  return (
    <section className="pt-24 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-orbitron text-green-400 mb-10 text-center">
        Carreiras
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        {vagas.map((v, i) => (
          <div
            key={i}
            className="bg-neutral-900 p-6 rounded-2xl border border-green-500 hover:border-blue-400 transition transform hover:scale-105 text-center"
          >
            <h2 className="text-xl font-semibold mb-2">{v.cargo}</h2>
            <p className="text-neutral-300">{v.tipo} · {v.nivel}</p>
            <button className="mt-4 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl font-semibold hover:scale-105 transition transform text-white">
              Candidatar-se
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

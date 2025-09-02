import React from "react";

export default function FAQ() {
  const perguntas = [
    { q: "Vocês atendem empresas de qualquer porte?", a: "Sim, do pequeno escritório a grandes corporações." },
    { q: "Oferecem suporte remoto?", a: "Sim, 24/7 com técnicos especializados." },
    { q: "Os serviços podem ser personalizados?", a: "Com certeza, cada cliente tem uma solução sob medida." },
  ];

  return (
    <section className="pt-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-orbitron text-green-400 mb-10 text-center">
        FAQ
      </h1>
      <div className="space-y-6">
        {perguntas.map((p, i) => (
          <div
            key={i}
            className="bg-neutral-900 p-6 rounded-2xl border border-green-500 hover:border-blue-400 transition transform hover:scale-105 cursor-pointer"
          >
            <h2 className="font-semibold text-white mb-2">{p.q}</h2>
            <p className="text-neutral-400">{p.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

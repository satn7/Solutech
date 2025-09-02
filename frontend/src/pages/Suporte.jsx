import React from "react";

export default function Suporte() {
  return (
    <section className="pt-24 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-orbitron text-green-400 mb-8 text-center animate-fade-in">
        Suporte Técnico Premium
      </h1>
      <p className="mb-6 text-neutral-300 text-lg text-center">
        Suporte remoto e presencial, instalação de sistemas e resolução de problemas de forma ágil.
      </p>
      <ul className="grid md:grid-cols-2 gap-6 list-disc ml-6 text-neutral-300 text-lg">
        <li className="p-4 bg-neutral-900 rounded-xl border border-green-500 hover:border-blue-400 transition transform hover:scale-105">
          🖥️ Instalação e configuração
        </li>
        <li className="p-4 bg-neutral-900 rounded-xl border border-green-500 hover:border-blue-400 transition transform hover:scale-105">
          🎧 Atendimento remoto e on-site
        </li>
        <li className="p-4 bg-neutral-900 rounded-xl border border-green-500 hover:border-blue-400 transition transform hover:scale-105">
          ⚙️ Diagnóstico e reparo avançado
        </li>
      </ul>
    </section>
  );
}

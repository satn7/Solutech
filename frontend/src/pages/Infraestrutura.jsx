import React from "react";

export default function Infraestrutura() {
  return (
    <section className="pt-24 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-orbitron text-green-400 mb-8 text-center animate-fade-in">
        Infraestrutura de TI
      </h1>
      <p className="mb-6 text-neutral-300 text-lg text-center">
        Montagem, configuração e manutenção de computadores. Sistemas Windows e Linux prontos para alta performance.
      </p>
      <ul className="grid md:grid-cols-2 gap-6 list-disc ml-6 text-neutral-300 text-lg">
        <li className="p-4 bg-neutral-900 rounded-xl border border-green-500 hover:border-blue-400 transition transform hover:scale-105">
          🔧 Manutenção preventiva e corretiva
        </li>
        <li className="p-4 bg-neutral-900 rounded-xl border border-green-500 hover:border-blue-400 transition transform hover:scale-105">
          💻 Gerenciamento de sistemas operacionais
        </li>
        <li className="p-4 bg-neutral-900 rounded-xl border border-green-500 hover:border-blue-400 transition transform hover:scale-105">
          ☁️ Integração com servidores locais e na nuvem
        </li>
      </ul>
    </section>
  );
}

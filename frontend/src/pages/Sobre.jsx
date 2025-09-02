import React from "react";

export default function Sobre() {
  const membros = [
    { nome: "Ariella Nova", cargo: "CTO Visionária", cor: "from-purple-500 to-pink-400" },
    { nome: "Lucas Volt", cargo: "Engenheiro de Redes", cor: "from-blue-400 to-green-400" },
    { nome: "Maya Flux", cargo: "Suporte Técnico Sênior", cor: "from-yellow-400 to-red-500" },
  ];

  return (
    <section className="pt-24 px-6 max-w-6xl mx-auto">
      <h1 className="text-5xl font-orbitron text-blue-400 mb-8">Sobre Nós</h1>
      <p className="text-lg text-neutral-300 mb-12">
        Fundada para revolucionar hardware, redes e suporte técnico, a Revolução Tech transforma empresas através da inovação e soluções inteligentes.
      </p>

      <h2 className="text-3xl mb-6">Nossos Valores</h2>
      <ul className="grid md:grid-cols-3 gap-6 mb-16 text-neutral-300">
        <li className="p-6 bg-neutral-900 rounded-xl border border-blue-500 hover:border-green-400 transition">🚀 Inovação constante</li>
        <li className="p-6 bg-neutral-900 rounded-xl border border-blue-500 hover:border-green-400 transition">🤝 Confiança em cada entrega</li>
        <li className="p-6 bg-neutral-900 rounded-xl border border-blue-500 hover:border-green-400 transition">🧠 Expertise comprovada</li>
      </ul>

      <h2 className="text-3xl mb-6">Nossa Equipe</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {membros.map((m, i) => (
          <div
            key={i}
            className="bg-neutral-900 p-6 rounded-2xl border border-transparent hover:border-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition transform hover:scale-105 text-center"
          >
            <div className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br ${m.cor} animate-pulse`}></div>
            <h3 className="font-semibold text-xl text-white">{m.nome}</h3>
            <p className="text-neutral-400">{m.cargo}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

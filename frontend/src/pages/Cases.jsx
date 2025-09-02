import React from "react";

export default function Cases() {
  const cases = [
    "Implantamos rede corporativa segura para 200 usuários.",
    "Manutenção de 150 máquinas em tempo recorde.",
    "Suporte técnico 24/7 para empresas de médio porte.",
  ];

  return (
    <section className="pt-24 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-orbitron text-blue-400 mb-10 text-center">
        Cases de Sucesso
      </h1>
      <ul className="space-y-6">
        {cases.map((c, i) => (
          <li
            key={i}
            className="bg-neutral-900 p-6 rounded-2xl border border-blue-600 hover:border-green-400 transition transform hover:scale-105 text-neutral-300"
          >
            {c}
          </li>
        ))}
      </ul>
    </section>
  );
}

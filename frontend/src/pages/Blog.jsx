import React from "react";

export default function Blog() {
  const posts = [
    { titulo: "Tendências em Redes Inteligentes", data: "Jul 2025" },
    { titulo: "Como otimizar a Infraestrutura de TI", data: "Ago 2025" },
    { titulo: "Suporte Técnico: o futuro do atendimento", data: "Set 2025" },
  ];

  return (
    <section className="pt-24 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-orbitron text-blue-400 mb-10 text-center">
        Blog
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((p, i) => (
          <article
            key={i}
            className="bg-neutral-900 border border-blue-600 hover:border-green-400 p-6 rounded-2xl transition transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold text-white mb-2">{p.titulo}</h2>
            <p className="text-sm text-neutral-400">{p.data}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

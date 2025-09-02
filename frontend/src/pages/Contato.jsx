import React from "react";

export default function Contato() {
  return (
    <section className="pt-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-orbitron text-blue-400 mb-10 text-center">
        Contato
      </h1>
      <form className="space-y-6">
        <input
          type="text"
          placeholder="Nome"
          className="w-full p-4 rounded-xl bg-neutral-800 border border-blue-600 focus:border-green-400 transition outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 rounded-xl bg-neutral-800 border border-blue-600 focus:border-green-400 transition outline-none"
        />
        <textarea
          placeholder="Mensagem"
          className="w-full p-4 rounded-xl bg-neutral-800 border border-blue-600 focus:border-green-400 transition outline-none h-36"
        ></textarea>
        <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl font-semibold text-white hover:scale-105 transition transform">
          Enviar
        </button>
      </form>
    </section>
  );
}

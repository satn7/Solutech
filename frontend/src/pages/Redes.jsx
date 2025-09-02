import React from "react";

export default function Redes() {
  return (
    <section className="pt-24 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-orbitron text-blue-400 mb-8 text-center animate-fade-in">
        Redes Inteligentes
      </h1>
      <p className="mb-6 text-neutral-300 text-lg text-center">
        Projetamos arquiteturas LAN, WAN e WLAN para empresas modernas.
      </p>
      <ul className="grid md:grid-cols-2 gap-6 list-disc ml-6 text-neutral-300 text-lg">
        <li className="p-4 bg-neutral-900 rounded-xl border border-blue-600 hover:border-green-400 transition transform hover:scale-105">
          🌐 Configuração de roteadores e switches
        </li>
        <li className="p-4 bg-neutral-900 rounded-xl border border-blue-600 hover:border-green-400 transition transform hover:scale-105">
          🔒 Redes seguras com firewall e VPN
        </li>
        <li className="p-4 bg-neutral-900 rounded-xl border border-blue-600 hover:border-green-400 transition transform hover:scale-105">
          ⚡ Serviços DNS, DHCP e QoS
        </li>
      </ul>
    </section>
  );
}

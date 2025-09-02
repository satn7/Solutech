// app/components/Footer.jsx
"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-8 mt-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Solutech. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <Link href="/sobre" className="hover:text-blue-500 transition-colors">Sobre</Link>
          <Link href="/contato" className="hover:text-blue-500 transition-colors">Contato</Link>
          <Link href="/faq" className="hover:text-blue-500 transition-colors">FAQ</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

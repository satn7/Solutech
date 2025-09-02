import React from "react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 py-8 mt-16 text-center text-neutral-400">
     <p>&copy; {new Date().getFullYear()} Solutech. Todos os direitos reservados.</p>
<p className="mt-2">Feito com 💙 para inovação tecnológica</p>
    </footer>
  );
}

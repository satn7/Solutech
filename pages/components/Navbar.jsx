"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi"; // ícones de menu e fechar

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { href: "/", label: "Home" },
    { href: "/sobre", label: "Sobre" },
    { href: "/solucoes", label: "Soluções" },
    { href: "/cases", label: "Cases" },
    { href: "/blog", label: "Blog" },
    { href: "/carreiras", label: "Carreiras" },
    { href: "/contato", label: "Contato" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <header className="header bg-white shadow-md fixed w-full z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="nav-logo font-bold text-xl">Solutech</div>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Menu */}
        <ul
          className={`flex flex-col md:flex-row md:items-center md:gap-6 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {links.map((link) => (
            <li key={link.href} className="border-b md:border-none">
              <Link
                href={link.href}
                className={`block px-4 py-2 md:p-0 nav-link ${
                  pathname === link.href ? "text-blue-600 font-semibold" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

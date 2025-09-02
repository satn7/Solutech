// components/Navbar.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import usePathname  from "next/navigation";
import FiMenu, FiX, FiChevronDown, FiBriefcase  from "react-icons/fi";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const pathname = usePathname();

  // Estrutura de links otimizada com um dropdown para "Soluções"
  const links = [
    { href: "/", label: "Home" },
    { href: "/sobre", label: "Sobre" },
    {
      label: "Soluções",
      sublinks: [
        { href: "/solucoes", label: "Visão Geral" },
        { href: "/infraestrutura", label: "Infraestrutura" },
        { href: "/redes", label: "Redes Inteligentes" },
        { href: "/suporte", label: "Suporte Premium" },
      ],
    },
    { href: "/cases", label: "Cases de Sucesso" },
    { href: "/blog", label: "Blog" },
    { href: "/carreiras", label: "Carreiras" },
  ];

  // Efeito para detectar o scroll e mudar o estilo da navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efeito para travar o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const closeAllMenus = () => {
    setIsOpen(false);
    setIsSolutionsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-lg shadow-lg shadow-blue-500/10"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between p-4 px-6">
        {/* Logo Aprimorado */}
        <Link href="/" className="flex items-center gap-2" onClick={closeAllMenus}>
          <FiBriefcase className="text-3xl text-blue-400" />
          <span className="text-2xl font-bold font-orbitron bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
            Solutech
          </span>
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) =>
            link.sublinks ? (
              // Dropdown Menu
              <div key={link.label} className="relative" onMouseLeave={() => setIsSolutionsOpen(false)}>
                <button
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  className="flex items-center gap-1 font-medium transition-colors hover:text-blue-400"
                >
                  {link.label} <FiChevronDown />
                </button>
                <AnimatePresence>
                  {isSolutionsOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-neutral-900/90 backdrop-blur-xl border border-neutral-700 rounded-lg shadow-xl"
                    >
                      {link.sublinks.map((sublink) => (
                        <li key={sublink.href}>
                          <Link
                            href={sublink.href}
                            className={`block w-full text-left px-4 py-3 text-sm transition-colors hover:bg-blue-500/10 hover:text-blue-300 ${pathname === sublink.href ? "text-blue-400" : ""}`}
                            onClick={closeAllMenus}
                          >
                            {sublink.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              // Link Padrão
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className="font-medium transition-colors hover:text-blue-400"
                >
                  {link.label}
                </Link>
                {pathname === link.href && (
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-green-400"
                    layoutId="underline"
                  />
                )}
              </li>
            )
          )}
        </ul>

        {/* Botão de Contato e Toggle Mobile */}
        <div className="flex items-center gap-4">
          <Link
            href="/contato"
            className="hidden md:block px-5 py-2 bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            Contato
          </Link>
          <button
            className="md:hidden text-2xl z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Menu Mobile com Animação */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-screen w-full bg-black/95 backdrop-blur-lg md:hidden p-6 pt-24"
          >
            <ul className="flex flex-col gap-2 text-center">
              {links.map((link) =>
                link.sublinks ? (
                  <div key={link.label} className="py-2">
                     <h3 className="text-xl font-bold text-blue-400 mb-2">{link.label}</h3>
                     {link.sublinks.map(sublink => (
                       <li key={sublink.href}>
                         <Link
                          href={sublink.href}
                          className={`block py-2 text-lg ${pathname === sublink.href ? "text-blue-500 font-bold" : "text-neutral-300"}`}
                          onClick={closeAllMenus}
                         >
                           {sublink.label}
                         </Link>
                       </li>
                     ))}
                  </div>
                ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-3 text-lg ${pathname === link.href ? "text-blue-500 font-bold" : "text-neutral-300"}`}
                    onClick={closeAllMenus}
                  >
                    {link.label}
                  </Link>
                </li>
                )
              )}
               <li className="mt-6">
                <Link
                  href="/contato"
                  className="inline-block w-full max-w-xs mx-auto px-5 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold rounded-lg shadow-lg"
                  onClick={closeAllMenus}
                >
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
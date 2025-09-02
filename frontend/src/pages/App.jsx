import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Solucoes from "./pages/Solucoes";
import Infraestrutura from "./pages/Infraestrutura";
import Redes from "./pages/Redes";
import Suporte from "./pages/Suporte";
import Cases from "./pages/Cases";
import Blog from "./pages/Blog";
import Carreiras from "./pages/Carreiras";
import Contato from "./pages/Contato";
import FAQ from "./pages/FAQ";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/solucoes" element={<Solucoes />} />
          <Route path="/infraestrutura" element={<Infraestrutura />} />
          <Route path="/redes" element={<Redes />} />
          <Route path="/suporte" element={<Suporte />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/carreiras" element={<Carreiras />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

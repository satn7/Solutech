import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Home";
import Sobre from "./Sobre";
import Solucoes from "./Solucoes";
import Infraestrutura from "./Infraestrutura";
import Redes from "./Redes";
import Suporte from "./Suporte";
import Cases from "./Cases";
import Blog from "./Blog";
import Carreiras from "./Carreiras";
import Contato from "./Contato";
import FAQ from "./FAQ";
import AdminDashboard from "./AdminDashboard";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-24">
        <Routes>
          <Route path="/home" element={<Home />} />
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

// Arquivo: pages/_app.js
import '../styles/globals.css'; // Mantenha sua importação de CSS global
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20"> {/* pt-20 para não ficar atrás do Navbar */}
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
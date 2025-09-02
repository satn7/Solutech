// Em pages/_app.js
import '../styles/globals.css'; // Garanta que esta linha exista!

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
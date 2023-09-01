import "@/styles/globals.scss";
import "@/styles/layout.scss";
import "@/styles/index.scss";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </>
  );
}

import "aos/dist/aos.css";
import "@/styles/globals.scss";
import "@/styles/globals.css";
import "@/styles/layout.scss";
import "@/styles/index.scss";
import "@/styles/calendar.scss";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import AOS from "aos";

import { useEffect } from "react";

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

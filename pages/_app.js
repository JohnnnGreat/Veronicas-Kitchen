import "@/styles/globals.scss";
import "@/styles/layout.scss";
import "@/styles/index.scss";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </>
  );
}
